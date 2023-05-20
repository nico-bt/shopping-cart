import { AddToCartIcon } from "../Icons"
import "./products.css"

function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong>
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
    </main>
  )
}

export default Products
