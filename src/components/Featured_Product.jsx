import React from 'react'

const Featured_Product = () => {
     const products = [
  {
    id: 1,
    brand: "Apple",
    name: "AirPods Pro 2",
    price: "189.00",
    oldPrice: "239.00",
    reviews: "1,248",
    badge: "-20%",
    image: "https://i.pinimg.com/736x/a6/8a/d7/a68ad7839a533b7d8dd78e2a2a415de1.jpg",
  },
  {
    id: 2,
    brand: "Samsung",
    name: "Galaxy Watch 6 Classic",
    price: "299.00",
    oldPrice: "349.00",
    reviews: "892",
    badge: "-15%",
    image: "https://i.pinimg.com/736x/0c/f4/84/0cf484304022bcdb7fdf7654a85ab597.jpg",
  },
  {
    id: 3,
    brand: "Herschel",
    name: "Classic Backpack",
    price: "89.00",
    oldPrice: null,
    reviews: "664",
    badge: "New",
    image: "https://i.pinimg.com/1200x/0c/79/10/0c7910fc8bbcf6aff8ee43a58ca8c44f.jpg",
  },
  {
    id: 4,
    brand: "Sony",
    name: " Headphones",
    price: "299.00",
    oldPrice: "369.00",
    reviews: "1,365",
    badge: "-20%",
    image: "https://i.pinimg.com/736x/ba/be/b4/babeb49607652151c5c7a0621df6f411.jpg",
  },
  {
    id: 5,
    brand: "Apple",
    name: "Apple Watch Series9",
    price: "359.00",
    oldPrice: "399.00",
    reviews: "2,104",
    badge: "-10%",
    image: "https://i.pinimg.com/1200x/ac/3c/23/ac3c23eba9649ed3ef6d9dc485db4a06.jpg",
  },
];
 
  return (
      <div>
        {/* Featured Products */}
<section className="max-w-7xl mx-auto px-6 py-16">
  {/* Header */}
  <div className="flex items-center justify-between mb-10">
    <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
    <a href="#" className="text-blue-600 font-medium hover:underline">
      View All Products →
    </a>
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 relative"
      >
        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-4 left-4 text-white text-xs font-bold px-2 py-1 rounded-md ${
              product.badge === "New" ? "bg-blue-500" : "bg-red-500"
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl">
          ♡
        </button>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />

        {/* Info */}
        <p className="text-sm text-gray-500">{product.brand}</p>
        <h3 className="font-semibold text-gray-900 mt-1">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2 text-sm">
          <span className="text-yellow-400">★★★★★</span>
          <span className="text-gray-400">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>

        {/* Button */}
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium transition">
          🛒 Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>
    </div>
  )
}

export default Featured_Product
