import { createContext, useContext, useState, useEffect } from "react"
import product1 from "../assets/images/product-1.png"
import product2 from "../assets/images/product-2.png"
import product3 from "../assets/images/product-3.png"
import product4 from "../assets/images/product-4.png"
import product5 from "../assets/images/product-5.png"
import product6 from "../assets/images/product-6.png"
import product7 from "../assets/images/product-7.png"
import product8 from "../assets/images/product-8.png"

const mockProducts = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    originalPrice: 160,
    discount: 25,
    rating: 4.5,
    reviews: 45,
    category: "casual",
    brand: "Nike",
    image: product1,
    colors: ["black", "white", "gray"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    discount: 8,
    rating: 3.5,
    reviews: 32,
    category: "casual",
    brand: "Levi's",
    image: product2,
    colors: ["blue", "black"],
    sizes: ["28", "30", "32", "34"],
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    reviews: 65,
    category: "formal",
    brand: "H&M",
    image: product3,
    colors: ["red", "blue", "green"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    discount: 19,
    rating: 4.5,
    reviews: 28,
    category: "casual",
    brand: "Adidas",
    image: product4,
    colors: ["orange", "black"],
    sizes: ["S", "M", "L"],
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    discount: 9,
    rating: 5.0,
    reviews: 89,
    category: "formal",
    brand: "Zara",
    image: product5,
    colors: ["green", "white"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    reviews: 67,
    category: "casual",
    brand: "Nike",
    image: product6,
    colors: ["orange", "black", "white"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    reviews: 45,
    category: "casual",
    brand: "H&M",
    image: product7,
    colors: ["blue", "khaki"],
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    reviews: 123,
    category: "casual",
    brand: "Levi's",
    image: product8,
    colors: ["blue", "black"],
    sizes: ["28", "30", "32", "34", "36"],
    isNew: false,
    isBestSeller: true,
  },
]

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: [0, 500],
    rating: 0,
    search: "",
  })
  
  useEffect(() => {
    let filtered = products

    if (filters.search) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          product.brand.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    if (filters.brand) {
      filtered = filtered.filter((product) => product.brand === filters.brand)
    }

    filtered = filtered.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    )

    if (filters.rating > 0) {
      filtered = filtered.filter((product) => product.rating >= filters.rating)
    }

    setFilteredProducts(filtered)
  }, [products, filters])

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }

  const clearFilters = () => {
    setFilters({
      category: "",
      brand: "",
      priceRange: [0, 500],
      rating: 0,
      search: "",
    })
  }

  const getProductById = (id) => {
    return products.find((product) => product.id === Number.parseInt(id))
  }

  const getNewArrivals = () => products.filter((product) => product.isNew)

  const getBestSellers = () => products.filter((product) => product.isBestSeller)

  const getBrands = () => [...new Set(products.map((product) => product.brand))]

  const getCategories = () => [...new Set(products.map((product) => product.category))]

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        filters,
        updateFilters,
        clearFilters,
        getProductById,
        getNewArrivals,
        getBestSellers,
        getBrands,
        getCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider")
  }
  return context
}
