import { useEffect, useState } from "react"
import { products as initialProducts } from "./mocks/products.json"
import Products from "./components/Products/Products"
import Header from "./components/Header/Header"
import useFilter from "./hooks/useFilter"
import useProductsData from "./hooks/useProductsData"
import Filter from "./components/Filter/Filter"

function App() {
  const [products, setProducts] = useState(initialProducts)
  const { maxProductsPrice, minProductsPrice, allCategories } = useProductsData(initialProducts)

  const { filterProducts, filter, setFilter } = useFilter(maxProductsPrice)
  const filteredProducts = filterProducts(products, filter)

  return (
    <>
      <Header />

      <Filter
        filter={filter}
        setFilter={setFilter}
        allCategories={allCategories}
        maxPrice={maxProductsPrice}
        minPrice={minProductsPrice}
      />

      {filteredProducts && <Products products={filteredProducts} />}
    </>
  )
}

export default App
