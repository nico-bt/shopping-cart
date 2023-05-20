import "./filter.css"

function Filter({ filter, setFilter, allCategories, maxPrice, minPrice }) {
  function handleClickLowest() {
    setFilter((prevFilter) => {
      return { ...prevFilter, sortByPrice: "lowest" }
    })
  }

  function handleClickHighest() {
    setFilter((prevFilter) => {
      return { ...prevFilter, sortByPrice: "highest" }
    })
  }

  function handleChangeCategory(e) {
    setFilter((prevFilter) => {
      return { ...prevFilter, category: e.target.value }
    })
  }

  function handleChangeMaxPrice(e) {
    setFilter((prevFilter) => {
      return { ...prevFilter, maxPrice: e.target.value }
    })
  }

  return (
    <div className="filters-container">
      <div className="filters-btns-container">
        <span>Sort by price: </span>
        <button onClick={handleClickLowest}>Lowest</button>
        <button onClick={handleClickHighest}>Highest</button>
      </div>

      <div>
        <label htmlFor="category-select">Category: </label>

        <select id="category-select" value={filter.category} onChange={handleChangeCategory}>
          <option value="" disabled>
            -- Choose an option --
          </option>
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="maxPrice">Maximum Price</label>
        <input
          id="maxPrice"
          type="range"
          max={maxPrice}
          min={minPrice}
          value={filter.maxPrice}
          onChange={handleChangeMaxPrice}
        />
        <span>${filter.maxPrice}</span>
      </div>
    </div>
  )
}

export default Filter
