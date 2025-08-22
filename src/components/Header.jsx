import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useProducts } from "../context/ProductContext"
import { ShoppingCart, Search, Menu, X, User } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { getCartItemsCount } = useCart()
  const { updateFilters } = useProducts()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    updateFilters({ search: searchQuery })
    navigate("/products")
    setSearchQuery("")
  }

  const cartItemsCount = getCartItemsCount()

  return (
    <>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-black">
              ShopVerse
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/products" className="text-gray-700 hover:text-black transition-colors">
                Shop
              </Link>
              <Link to="/products?category=casual" className="text-gray-700 hover:text-black transition-colors">
                On Sale
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-black transition-colors">
                New Arrivals
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-black transition-colors">
                Brands
              </Link>
            </nav>

            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96"
            >
              <Search size={20} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent flex-1 outline-none text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Mobile Search */}
              <button className="md:hidden p-2">
                <Search size={20} />
              </button>

              {/* Cart */}
              <Link to="/cart" className="relative p-2">
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {/* User Account */}
              <button className="p-2">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                <Search size={20} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-transparent flex-1 outline-none text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              <Link to="/products" className="block py-2 text-gray-700">
                Shop
              </Link>
              <Link to="/products?category=casual" className="block py-2 text-gray-700">
                On Sale
              </Link>
              <Link to="/products" className="block py-2 text-gray-700">
                New Arrivals
              </Link>
              <Link to="/products" className="block py-2 text-gray-700">
                Brands
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
