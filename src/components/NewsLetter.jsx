import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h2>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black px-6 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Subscribe to Newsletter
          </button>
        </form>

        {isSubscribed && <div className="mt-4 text-green-400">Thank you for subscribing to our newsletter!</div>}
      </div>
    </section>
  )
}

export default Newsletter
