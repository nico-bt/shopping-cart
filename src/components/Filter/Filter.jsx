import React from "react"

function Filter({ filter, setFilter, allCategories }) {
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

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <button onClick={handleClickLowest}>Lowest</button>
      <button onClick={handleClickHighest}>Highest</button>

      <label htmlFor="category-select">Category: </label>

      <select id="category-select" value={filter.category} onChange={handleChangeCategory}>
        <option value="">--Please choose an option--</option>
        {allCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
