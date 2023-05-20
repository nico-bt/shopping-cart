function useProductsData(products) {
  const maxProductsPrice = Math.max(...products.map((item) => item.price))
  const minProductsPrice = Math.min(...products.map((item) => item.price))

  let allCategories = new Set(products.map((item) => item.category))
  allCategories = ["all", ...allCategories]

  return { maxProductsPrice, minProductsPrice, allCategories }
}

export default useProductsData
