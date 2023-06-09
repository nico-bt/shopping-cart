import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Tracking cart in localStorage
  // ---------------------------------------------------------------
  // Retrieve cart items from local storage
  const cartInLocalStorage = localStorage.getItem("cart")
  useEffect(() => {
    if (cartInLocalStorage) {
      setCart(JSON.parse(cartInLocalStorage))
    }
  }, [])

  const clearCart = () => {
    setCart([])
  }

  // Add cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  // Actions
  // ---------------------------------------------------------------
  const addToCart = (item) => {
    setCart((prevState) => {
      const productInCartIndex = prevState.findIndex((cartItem) => cartItem.id === item.id)

      // Si el producto ya está en el cart, le sumamos +1
      if (productInCartIndex >= 0) {
        const newState = prevState.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 }
          } else {
            return cartItem
          }
        })
        return newState
      } else {
        // Si no está en el cart
        return [...prevState, { ...item, quantity: 1 }]
      }
    })
  }

  const removeItem = (item) => {
    setCart((prevState) => prevState.filter((prod) => prod.id !== item.id))
  }

  return (
    <CartContext.Provider value={{ cart, clearCart, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
