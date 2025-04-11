import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

function Header() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header>
      <nav>
        <div className="nav-left">
          <Link to="/home">Home</Link>
        </div>
        <div className="nav-right">
          <button className="cart-btn" onClick={() => navigate("/cart")}>
             Cart
            <span className="cart-count">{cartItems.length}</span>
          </button>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
