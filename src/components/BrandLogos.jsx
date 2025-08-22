const BrandLogos = () => {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"]

  return (
    <section className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-white text-xl lg:text-2xl font-bold opacity-80 hover:opacity-100 transition-opacity"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandLogos
