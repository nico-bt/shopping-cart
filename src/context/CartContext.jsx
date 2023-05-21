import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const clearCart = () => {
    setCart([])
  }

  const addToCart = (item) => {
    setCart((prevState) => {
      const productInCartIndex = prevState.findIndex((cartItem) => cartItem.id === item.id)

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
