import { AddToCartIcon } from "../Icons"
import "./products.css"

function Products({ products }) {
  return (
    <main className="products">
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div className="product-category">{product.category}</div>
              <div>
                <h3>{product.title}</h3>
              </div>
              <div>${product.price.toLocaleString()}</div>
              <div>
                <button>
                  Add to Cart <AddToCartIcon />{" "}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="product-no-items">No Items </div>
      )}
    </main>
  )
}

export default Products
