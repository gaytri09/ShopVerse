"use client"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useProducts } from "../context/ProductContext"
import ProductCard from "../components/ProductCard"
import ProductFilters from "../components/ProductFilters"
import { Filter, X } from "lucide-react"

const Products = () => {
  const [searchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("featured")

  const { filteredProducts, filters, updateFilters, clearFilters } = useProducts()

  // Apply URL parameters on mount
  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      updateFilters({ category })
    }
  }, [searchParams, updateFilters])

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.isNew - a.isNew
      default:
        return 0
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Products ({filteredProducts.length})</h1>

        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2"
          >
            <Filter size={20} />
            Filters
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filters */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <ProductFilters />
        </div>

        {/* Mobile Filters Overlay */}
        {showFilters && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="bg-white w-80 h-full overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-2">
                  <X size={20} />
                </button>
              </div>
              <div className="p-4">
                <ProductFilters />
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          {/* Active Filters */}
          {(filters.category || filters.brand || filters.search) && (
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-sm text-gray-600">Active filters:</span>
              {filters.category && (
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Category: {filters.category}</span>
              )}
              {filters.brand && (
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Brand: {filters.brand}</span>
              )}
              {filters.search && (
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Search: {filters.search}</span>
              )}
              <button onClick={clearFilters} className="text-sm text-red-600 hover:text-red-800">
                Clear all
              </button>
            </div>
          )}

          {/* Products */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products
