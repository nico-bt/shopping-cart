import { useState } from "react"

function useFilter(maxPrice) {
  const [filter, setFilter] = useState({
    category: "all",
    sortByPrice: "default",
    maxPrice: maxPrice,
  })

  const filterProducts = (products, filter) => {
    let filteredProducts

    // By Category
    //-----------------------------------------------------------
    if (filter.category === "all") {
      filteredProducts = products.filter((item) => item.price <= filter.maxPrice)
    } else {
      filteredProducts = products.filter(
        (item) => item.category === filter.category && item.price <= filter.maxPrice
      )
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
