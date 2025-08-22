import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const CustomerReviews = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      verified: true,
    },
    {
      name: "Alex K.",
      rating: 5,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      verified: true,
    },
    {
      name: "James L.",
      rating: 5,
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      verified: true,
    },
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={20} className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
    ))
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-2">
            <button
              onClick={prevReview}
              className="p-2 rounded-full border border-gray-300 hover:bg-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextReview}
              className="p-2 rounded-full border border-gray-300 hover:bg-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg border transition-all ${
                index === currentReview ? "ring-2 ring-black" : ""
              }`}
            >
              <div className="flex mb-4">{renderStars(review.rating)}</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-medium">{review.name}</span>
                {review.verified && <span className="text-green-500 text-sm">✓</span>}
              </div>
              <p className="text-gray-600 leading-relaxed">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
