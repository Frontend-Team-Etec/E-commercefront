import React from 'react'

const Hero = () => {
  return (
    <div>
        
         <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ New Collection 2026
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Discover
              <span className="text-blue-600"> Amazing </span>
              Products
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-xl leading-relaxed">
              Find the latest electronics, gadgets, accessories and more.
              Quality products, great prices, and fast delivery all in one place.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition duration-300 shadow-lg shadow-blue-200">
                Shop Now 
              </button>

              <button className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-7 py-3.5 rounded-xl font-semibold transition duration-300">
                Explore Products
              </button>

            </div>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-8 mt-10">

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center">
                  🚚
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Free Delivery
                  </p>
                  <p className="text-sm text-gray-500">
                    On selected orders
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-yellow-100 flex items-center justify-center">
                  ⭐
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Best Quality
                  </p>
                  <p className="text-sm text-gray-500">
                    Trusted products
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            {/* Background Circle */}
            <div className="absolute w-[420px] h-[420px] bg-blue-100 rounded-full blur-3xl opacity-60">
            </div>

            {/* Product Image */}
            <div className="relative z-10">

              <img
                src="/hero.jpg"
                alt="Wireless headphones"
                className="w-[450px] h-[450px] object-contain rounded-3xl drop-shadow-2xl hover:scale-105 transition duration-500"
              />

              {/* Discount Card */}
              <div className="absolute top-8 -left-8 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-sm text-gray-500">
                  Special Offer
                </p>

                <p className="text-2xl font-bold text-red-500">
                  -30%
                </p>
              </div>

              {/* Rating Card */}
              <div className="absolute bottom-10 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4">
                <p className="text-yellow-500">
                  ⭐⭐⭐⭐⭐
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  4.9 / 5 Rating
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    </div>
  )
}

export default Hero
