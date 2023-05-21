import { useState } from "react"
import { useCartContext } from "../../hooks/useCartContext"
import { AddToCartIcon } from "../Icons"
import "./products.css"

function ProductItem({ product }) {
  const { addToCart } = useCartContext()
  const [addedSuccess, setAddedSuccess] = useState(false)

  const handleClickAddItem = () => {
    addToCart(product)
    setAddedSuccess(true)
    // For display message for 2 seconds
    setTimeout(() => {
      setAddedSuccess(false)
    }, 2000)
  }

  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-category">{product.category}</div>
      <div>
        <h3>{product.title}</h3>
      </div>
      <div>${product.price.toLocaleString()}</div>
      <div>
        <button onClick={handleClickAddItem}>
          Add to Cart <AddToCartIcon />{" "}
        </button>
      </div>

      {addedSuccess && <div className="addedItemSuccess">Added to Cart! ✔</div>}
    </li>
  )
}

function Products({ products }) {
  return (
    <main className="products">
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <div className="product-no-items">No Items with that criteria</div>
      )}
    </main>
  )
}

export default Products
