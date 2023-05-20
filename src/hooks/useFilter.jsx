import { useState } from "react"

function useFilter() {
  const [filter, setFilter] = useState({ category: "all", sortByPrice: "default" }) //default - lowest - highest (by price)

  const filterProducts = (products, filter) => {
    let filteredProducts

    // By Category
    //-----------------------------------------------------------
    if (filter.category === "all") {
      filteredProducts = [...products]
    } else {
      filteredProducts = products.filter((item) => item.category === filter.category)
    }

    // By Price
    //-----------------------------------------------------------
    if (filter.sortByPrice === "lowest") {
      filteredProducts.sort((a, b) => a.price - b.price)
    }

    if (filter.sortByPrice === "highest") {
      filteredProducts.sort((a, b) => b.price - a.price)
    }

    return filteredProducts
  }
  return { filterProducts, filter, setFilter }
}

export default useFilter
