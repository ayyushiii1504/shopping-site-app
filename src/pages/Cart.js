import { useCart } from "../context/CartContext";
import { useState } from "react";
//import { toINR } from "../utils/currency"; // if you're using INR conversion
import "./Cart.css";

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    clearCart();
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
    }, 4000);
  };

  return (
    <div className="cart">
      {orderPlaced && (
        <div className="popup success">
          <h3>Order Placed Successfully!</h3>
          
        </div>
      )}
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <h3>No items in cart.</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>₹{Math.round(item.price * 83.5)}</p>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ₹{Math.round(total * 83.5)}</h3>

          <button className="checkout" onClick={handleCheckout}>
            Checkout
          </button>
          
        </>
      )}
      
    </div>
  );
}

export default Cart;
