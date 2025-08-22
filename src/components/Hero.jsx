import { Link } from "react-router-dom"
import hero from "../assets/images/hero-banner.jpg"
const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                FIND CLOTHES
                <br />
                THAT MATCHES
                <br />
                YOUR STYLE
              </h1>
              <p className="text-gray-600 text-lg max-w-lg">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your
                individuality and cater to your sense of style.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Shop Now
            </Link>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-black">200+</div>
                <div className="text-gray-600">International Brands</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">2,000+</div>
                <div className="text-gray-600">High-Quality Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">30,000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-white rounded-lg overflow-hidden">
              <img
                src={hero}
                alt="Fashion Models"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
