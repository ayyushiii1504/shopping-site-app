import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="detail">
      {showPopup && (
        <div className="cart-popup">Item added to cart</div>
      )}

      <img src={product.image} alt={product.title} />
      
      <div>
        <h2>{product.title}</h2>
        <br></br>
        <ul className="product-desc">
          {product.description.split('. ').map((point, index) => (
            <li key={index}>{point.trim()}.</li>
          ))}
        </ul>
        <br></br>
        <h3>₹{Math.round(product.price * 83.5)}</h3>
        <br></br>
        <button onClick={handleAddToCart}>Add to Cart</button>

      </div>
    </div>
  );
}

export default ProductDetail;
