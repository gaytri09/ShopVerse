import { useProducts } from "../context/ProductContext"

const CategoryList = () => {
  const { getCategories } = useProducts()
  const categories = getCategories()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {categories.map((category) => (
        <div 
          key={category.id} 
          className="cursor-pointer p-4 border rounded-xl shadow hover:shadow-lg transition"
        >
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold text-center">{category.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default CategoryList
