import { Link } from "react-router-dom"
import { useProducts } from "../context/ProductContext"
import ProductCard from "./ProductCard"

const NewArrivals = () => {
  const { getNewArrivals } = useProducts()
  const newArrivals = getNewArrivals().slice(0, 4)

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">NEW ARRIVALS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-block border border-gray-300 text-black px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
