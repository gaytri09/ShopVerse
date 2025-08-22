import { useState } from "react"
import { useProducts } from "../context/ProductContext"
import { Star, ChevronDown, ChevronUp } from "lucide-react"

const ProductFilters = () => {
  const { filters, updateFilters, clearFilters, getBrands, getCategories } = useProducts()

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    price: true,
    rating: true,
  })

  const brands = getBrands()
  const categories = getCategories()

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handlePriceChange = (value, index) => {
    const newRange = [...filters.priceRange]
    newRange[index] = Number.parseInt(value)
    updateFilters({ priceRange: newRange })
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={16} className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
    ))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button onClick={clearFilters} className="text-sm text-gray-600 hover:text-black">
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full text-left font-medium mb-3"
        >
          Category
          {expandedSections.category ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                value=""
                checked={filters.category === ""}
                onChange={(e) => updateFilters({ category: e.target.value })}
                className="mr-2"
              />
              All Categories
            </label>
            {categories.map((category) => (
              <label key={category} className="flex items-center capitalize">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filters.category === category}
                  onChange={(e) => updateFilters({ category: e.target.value })}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("brand")}
          className="flex items-center justify-between w-full text-left font-medium mb-3"
        >
          Brand
          {expandedSections.brand ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {expandedSections.brand && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="brand"
                value=""
                checked={filters.brand === ""}
                onChange={(e) => updateFilters({ brand: e.target.value })}
                className="mr-2"
              />
              All Brands
            </label>
            {brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={filters.brand === brand}
                  onChange={(e) => updateFilters({ brand: e.target.value })}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left font-medium mb-3"
        >
          Price Range
          {expandedSections.price ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {expandedSections.price && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(e.target.value, 0)}
                className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(e.target.value, 1)}
                className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
            <div className="text-sm text-gray-600">
              ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("rating")}
          className="flex items-center justify-between w-full text-left font-medium mb-3"
        >
          Rating
          {expandedSections.rating ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {expandedSections.rating && (
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={filters.rating === rating}
                  onChange={(e) => updateFilters({ rating: Number.parseInt(e.target.value) })}
                  className="mr-2"
                />
                <div className="flex items-center gap-1">
                  {renderStars(rating)}
                  <span className="text-sm text-gray-600">& up</span>
                </div>
              </label>
            ))}
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={0}
                checked={filters.rating === 0}
                onChange={(e) => updateFilters({ rating: Number.parseInt(e.target.value) })}
                className="mr-2"
              />
              All Ratings
            </label>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductFilters
