import Hero from "../components/Hero"
import BrandLogos from "../components/BrandLogos"
import NewArrivals from "../components/NewArrivals"
import TopSelling from "../components/TopSelling"
import BrowseByStyle from "../components/BrowseByStyle"
import CustomerReviews from "../components/CustomerReviews"
import Newsletter from "../components/Newsletter"

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandLogos />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <CustomerReviews />
      <Newsletter />
    </div>
  )
}

export default Home
