import React from 'react'

const product=[
  {
    name: "Gaming Motherboard",
    price: "$159.00",
    oldPrice: "$199.00",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
  },
  {
    name: "Gaming Motherboard",
    price: "$159.00",
    oldPrice: "$199.00",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
  },
  {
    name: "Gaming Motherboard",
    price: "$159.00",
    oldPrice: "$199.00",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
  },
]

const Category = () => {
  return (
    <div className="p-3">
      <div className="flex justify-center gap-5">

        <div className="w-[320px] h-[520px] overflow-hidden rounded-lg ">
          <img
            src="https://img.magnific.com/free-psd/black-friday-sale-social-media-instagram-story-design-template_47987-24603.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Black Friday Sale"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">

          <div className="flex justify-center">
            <div className="w-full bg-gray-300 py-3 px-5 rounded-lg text-center">
              <p className="font-semibold">
                New Computer Accessories
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            {product.map((item, index) => (
              <div
                key={index}
                className="w-[270px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full h-[200px] bg-gray-100 overflow-hidden">

                  <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -15%
                  </span>

                  <button className="absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
                    ♡
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">

                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Computer Accessories
                  </p>

                  <h2 className="text-lg font-semibold text-gray-800 mt-1">
                    {item.name}
                  </h2>

                  <div className="flex items-center gap-2 mt-3">
                    <div className="text-yellow-400 text-sm">
                      ★★★★★
                    </div>

                    <span className="text-sm font-medium text-gray-700">
                      4.5
                    </span>

                    <span className="text-xs text-gray-400">
                      (120)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-2xl font-bold text-blue-600">
                      {item.price}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      {item.oldPrice}
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      In Stock
                    </span>
                  </div>

                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition">
                    🛒 Add to Cart
                  </button>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Category
