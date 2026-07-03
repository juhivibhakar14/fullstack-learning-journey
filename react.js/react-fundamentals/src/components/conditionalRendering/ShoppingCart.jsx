import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState(false);

  function handleClick() {
    setCart(!cart);
  }

  return (
    <>
      <h2>Shopping Cart</h2>

      {cart ? (
        <ul>
          <li>🍌 Banana</li>
          <li>🍎 Apple</li>
          <li>🍍 Pineapple</li>
        </ul>
      ) : (
        <p>🛒 Cart is Empty</p>
      )}

      <button onClick={handleClick}>
        {cart ? "Empty Cart" : "Add Items"}
      </button>
    </>
  );
}

export default ShoppingCart;