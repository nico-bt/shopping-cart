import { useEffect, useState } from "react"
import { products as initialProducts } from "./mocks/products.json"
import Products from "./components/Products/Products"

function App() {
  const [products, setProducts] = useState(initialProducts)

  const [filter, setFilter] = useState("default") //default - lowest - highest (by price)

  const filteredProducts = (products, filter) => {
    let filteredProducts

    if (filter === "lowest") {
      filteredProducts = [...products].sort((a, b) => a.price - b.price)
    }

    if (filter === "highest") {
      filteredProducts = [...products].sort((a, b) => b.price - a.price)
    }

    if (filter === "default") {
      filteredProducts = [...products]
    }
    return filteredProducts
  }

  useEffect(() => {
    setProducts(() => filteredProducts(products, filter))
  }, [filter])

  return (
    <>
      <h1>Shopping Cart</h1>
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={() => setFilter("lowest")}>Lowest</button>
        <button onClick={() => setFilter("highest")}>Highest</button>
      </div>
      {products && <Products products={products} />}
    </>
  )
}

export default App
