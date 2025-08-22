import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { useCart } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ))
  }

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 overflow-hidden relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
              -{product.discount}%
            </div>
          )}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 bg-black text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <h3 className="font-medium text-gray-900 group-hover:text-black transition-colors">{product.name}</h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-sm text-gray-600">
              {product.rating}/5 ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-black">${product.price}</span>
            {product.originalPrice && <span className="text-gray-500 line-through">${product.originalPrice}</span>}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
