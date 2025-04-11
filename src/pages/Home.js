import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      const url =
        selectedCategory === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${selectedCategory}`;

      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, [selectedCategory]);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="home">
      <h2>Products</h2>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        {categories.map((cat) => (
          <option value={cat} key={cat}>{cat}</option>
        ))}
      </select>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-tumb">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h4>
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </h4>
              <div className="product-bottom-details">
                <div className="product-price">
                  ₹{Math.round(product.price * 83.5)}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Home;
