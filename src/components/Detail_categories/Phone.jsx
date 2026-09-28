import React from "react";

const Dtail_categiries = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 18 chhery",
      description: "Latest Apple smartphone",
      price: "$1889.99",
      oldPrice: "$2,000",
      rating: "4.8",
      image:
        "https://i.pinimg.com/1200x/db/cf/0e/dbcf0e162b0e37634159c735d378d6ab.jpg",
    },
    {
      id: 2,
      name: "MacBook Air",
      description: "Powerful laptop for work",
      price: "$1,199",
      oldPrice: "$1,299",
      rating: "4.9",
      image:
        "https://i.pinimg.com/1200x/11/95/5d/11955d3dc0488f6dde6db5478b9f7245.jpg",
    },
    {
      id: 3,
      name: "AirPods Pro",
      description: "Premium wireless audio",
      price: "$189",
      oldPrice: "$239",
      rating: "4.7",
      image:
        "https://i.pinimg.com/736x/58/e7/c1/58e7c15d79ecb377ce30e3d438822fb0.jpg",
    },
    {
      id: 4,
      name: "Canon Camera",
      description: "Capture every moment",
      price: "$799",
      oldPrice: "$899",
      rating: "4.8",
      image:
        "https://i.pinimg.com/736x/1e/cf/15/1ecf15fd29ac5109a073299a6445213a.jpg",
    },
    {
      id: 5,
      name: "Smart Watch",
      description: "Smart and stylish",
      price: "$299",
      oldPrice: "$349",
      rating: "4.6",
      image:
        "https://i.pinimg.com/736x/f1/d9/6b/f1d96b3c4c65c929e8848eb2142f4ff3.jpg",
    },
    {
      id: 6,
      name: "Wireless Accessories",
      description: "Useful accessories",
      price: "$49",
      oldPrice: "$69",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/03/90/22/039022d7f0d834d55904ceffb5717a58.jpg",
    },
    {
      id: 7,
      name: "Wireless Headphone",
      description: "Useful accessories",
      price: "$39",
      oldPrice: "$79",
      rating: "4.0",
      image:
        "https://i.pinimg.com/736x/47/73/3f/47733f1aaf159ec0784b012f346e4612.jpg",
    },
    {
      id: 8,
      name: "Girls Backpack School",
      description: "Useful for girl",
      price: "$39",
      oldPrice: "$79",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/ab/1a/5c/ab1a5c90a2fa0e403fd6ae944b7772d9.jpg",
    },
    {
      id: 9,
      name: "Boat Bluetooth",
      description: "for who like listen song",
      price: "$35",
      oldPrice: "$50",
      rating: "3.5",
      image:
        "https://i.pinimg.com/736x/fd/d4/d9/fdd4d95cb023e4663f1e4c6082c6556c.jpg",
    },
    {
      id: 10,
      name: "Best Mechanical mouse",
      description: "gaming mouse for ultimate",
      price: "$29.99",
      oldPrice: "$50",
      rating: "3.5",
      image:
        "https://i.pinimg.com/1200x/46/e1/08/46e10816e0ed8b25c08ccf32225983a4.jpg",
    },
    {
      id: 11,
      name: "Asus Laptop",
      description: "perfect for productivity",
      price: "$29.99",
      oldPrice: "$50",
      rating: "3.5",
      image:
        "https://i.pinimg.com/736x/c0/9a/47/c09a47cacb2a32df639a843bcf74b457.jpg",
    },
    {
      id: 12,
      name: "Mac Book Pro",
      description: "perfect for work and study",
      price: "$699.99",
      oldPrice: "$950",
      rating: "5.0",
      image:
        "https://i.pinimg.com/736x/52/f6/36/52f6367fc8529b2c2b89d731b0ac57df.jpg",
    },
    {
      id: 13,
      name: "Comfortable Typing",
      description: "perfect keyboard",
      price: "$39.99",
      oldPrice: "$50",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/61/38/5a/61385aea79a25ea216b97a61359080a2.jpg",
    },
    {
      id: 14,
      name: "Customizable RGB",
      description: "perfect keyboard",
      price: "$39.99",
      oldPrice: "$50",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/03/62/45/0362452b0e0674c40c2c38370124aae1.jpg",
    },
    {
      id: 15,
      name: "YUNZII C75",
      description: "workflow is so smooth",
      price: "$59.99",
      oldPrice: "$70",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/54/ef/6a/54ef6abe33c2f20a6b63fc23ce776755.jpg",
    },
    {
      id: 16,
      name: "Eco-friendly Monitors",
      description: "Colorful, sleek",
      price: "$170",
      oldPrice: "$200",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/b7/93/8e/b7938e1c9fb0a415887e0b2bff38709a.jpg",
    },
    {
      id: 17,
      name: "ECM-W3S Sony",
      description: "Take your audio recording",
      price: "$170",
      oldPrice: "$200",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/80/15/fc/8015fc8abaab55beead047d1da3d792c.jpg",
    },
    {
      id: 18,
      name: "Camera Vlog",
      description: "Take your VDO vlog",
      price: "$950",
      oldPrice: "$1000",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/0c/91/5b/0c915b2d3b4d0faffec7eed56320a7d7.jpg",
    },
    {
      id: 19,
      name: "Purple Ipad",
      description: "esy for study and work",
      price: "$400",
      oldPrice: "$690",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/61/51/1b/61511b26cfc599dbbb9e926860de8486.jpg",
    },
    {
      id: 20,
      name: "Ipad pro 11",
      description: "esy for study and work",
      price: "$880",
      oldPrice: "$990",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/02/14/eb/0214ebd32bdcb4dee0b4cb8343c3cffa.jpg",
    },
    {
      id: 21,
      name: "Iphone 18",
      description: "New Product",
      price: "$1990",
      oldPrice: "$2000",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/27/e8/c6/27e8c64afb2f89305606f75118b3183f.jpg",
    },
    {
      id: 22,
      name: "Huawei Matepad",
      description: "easy for student and worker",
      price: "$550",
      oldPrice: "$570",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/dd/df/34/dddf34389d6df679f812cb3fbed37888.jpg",
    },
    {
      id: 23,
      name: "Redemi pad 2",
      description: "easy for student and worker",
      price: "$350",
      oldPrice: "$470",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/bd/23/ef/bd23ef11547586451e470495e157f68f.jpg",
    },
    {
      id: 24,
      name: "Ipencil 2nd generation",
      description: "easy for student and designer",
      price: "$100",
      oldPrice: "$170",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/a1/d8/c0/a1d8c0cb9619cccd283daaea270d3fdc.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product.name);
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Shop by detail categories
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Explore our products and find everything you need.
          </p>
        </div>

        {/* Product Cards - slightly taller image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 
              hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Image - a little taller */}
              <div className="h-36 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover 
                  group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Compact Content */}
              <div className="p-2.5">
                <h3 className="text-xs font-semibold text-gray-900 line-clamp-1 
                  group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-0.5">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-[11px] text-gray-500">
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-blue-600">
                      {product.price}
                    </span>
                    <span className="text-[10px] text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-2 bg-blue-600 text-white text-[11px] 
                  font-medium py-1.5 rounded-md
                  hover:bg-blue-700 active:scale-95 
                  transition-all duration-150"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dtail_categiries;