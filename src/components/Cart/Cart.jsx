import "./Cart.css"

import { useId, useState } from "react"
import { CartIcon, ClearCartIcon } from "../Icons"
import { useCartContext } from "../../hooks/useCartContext"

function CartItem({ thumbnail, price, title, quantity, addToCart, removeItem }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
        <button onClick={removeItem}> 🗑 </button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeItem } = useCartContext()

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.length > 0 ? (
            cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
                removeItem={() => removeItem(product)}
              />
            ))
          ) : (
            <div className="empty-cart"> 🛒 Your Cart is empty</div>
          )}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
