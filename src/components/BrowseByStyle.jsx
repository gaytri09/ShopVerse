import { Link } from "react-router-dom"
import casualCategory from "../assets/images/casual-category.png"
import formalCategory from "../assets/images/formal-category.png"
import gymCategory from "../assets/images/gym-category.png"
import partyCategory from "../assets/images/party-category.png"

const BrowseByStyle = () => {
  const styles = [
    { name: "Casual", image: casualCategory, category: "casual", hasText: true },
    { name: "Formal", image: formalCategory, category: "formal", hasText: false },
    { name: "Party", image: partyCategory, category: "party", hasText: false },
    { name: "Gym", image: gymCategory, category: "gym", hasText: true },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            BROWSE BY DRESS STYLE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style) => (
            <Link
              key={style.category}
              to={`/products?category=${style.category}`}
              aria-label={`Browse ${style.name} styles`}
              className="group relative rounded-2xl bg-gray-100 aspect-[4/3] shadow-md hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />

              {!style.hasText && (
                <>
                  <div className="absolute inset-0 bg-black/30 rounded-2xl group-hover:bg-black/40 transition"></div>
                  <div className="absolute top-6 left-6 z-10">
                    <h3 className="text-2xl font-bold text-black">{style.name}</h3>
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrowseByStyle
