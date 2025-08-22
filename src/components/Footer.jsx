import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"
import visa from "../assets/images/visa.png"
import mastercard from "../assets/images/mastercard.png"
import paypal from "../assets/images/paypal.png"
import applepay from "../assets/images/applepay.png"
import googlepay from "../assets/images/applepay.png"
const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-black mb-4 block">
              ShopVerse
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-black mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Works
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-semibold text-black mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-black mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-black transition-colors">
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">ShopVerse © 2000-2023, All Rights Reserved</p>
            <div className="flex items-center space-x-4">
              <img src={visa} alt="Visa" className="h-6" />
              <img src={mastercard} alt="Mastercard" className="h-6" />
              <img src={paypal} alt="PayPal" className="h-6" />
              <img src={applepay} alt="Apple Pay" className="h-6" />
              <img src={googlepay} alt="Google Pay" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
