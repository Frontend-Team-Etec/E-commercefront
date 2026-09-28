import React from 'react'

const Laptop = () => {
    
  const products = [
    {
      id: 1,
      name: "MacBook ",
      description: "Latest Apple laptop",
      price: "$1889.99",
      oldPrice: "$2,000",
      rating: "4.8",
      image:
        "https://i.pinimg.com/1200x/97/22/7f/97227f94ad4415049f45d0012abee7ef.jpg",
    },
    {
      id: 2,
      name: "MacBook Air",
      description: "Powerful laptop for work",
      price: "$1,199",
      oldPrice: "$1,299",
      rating: "4.9",
      image:
        "https://i.pinimg.com/736x/0e/6c/b8/0e6cb8282d3ce52ca0c11de985b9b6d3.jpg",
    },
    {
      id: 3,
      name: "Mac M4",
      description: "Best Product",
      price: "$1890",
      oldPrice: "$2390",
      rating: "4.7",
      image:
        "https://i.pinimg.com/1200x/5b/d9/52/5bd952eb2722608d490731a2815135a1.jpg",
    },
    {
      id: 4,
      name: "Mac Neo",
      description: "Capture every moment",
      price: "$799",
      oldPrice: "$899",
      rating: "4.8",
      image:
        "https://i.pinimg.com/736x/23/40/a1/2340a1d077e3c258d85c5e6142209e93.jpg",
    },
    {
      id: 5,
      name: "Mac New Series",
      description: "Smart and stylish",
      price: "$1299",
      oldPrice: "$1349",
      rating: "4.6",
      image:
        "https://i.pinimg.com/1200x/80/31/24/8031248eb3d04c983bafc074601994f3.jpg",
    },
    {
      id: 6,
      name: "Mac Neo Ram 1T",
      description: "Useful accessories",
      price: "$1490",
      oldPrice: "$1690",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/11/c3/f8/11c3f8c929654e1288f74ed0706d8c21.jpg",
    },
    {
      id: 7,
      name: " Mac Ram16 2020",
      description: "Useful accessories",
      price: "$39",
      oldPrice: "$79",
      rating: "4.0",
      image:
        "https://i.pinimg.com/736x/64/9b/62/649b62f546eeb30f064029a8b65db7af.jpg",
    },
    {
      id: 8,
      name: "Mac Ram8 2014",
      description: "Useful for girl",
      price: "$639",
      oldPrice: "$790",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/ac/3b/7c/ac3b7c6516b274c7ce3c540872a79822.jpg",
    },
    {
      id: 9,
      name: "Mac Ram 16 2023",
      description: "for gaming or work",
      price: "$1135",
      oldPrice: "$1550",
      rating: "3.5",
      image:
        "https://i.pinimg.com/736x/ef/70/d3/ef70d3eb6418bec20ba6f75a72decc69.jpg",
    },
    {
      id: 10,
      name: "Mac Neo 2026",
      description: "best for use ",
      price: "$1200",
      oldPrice: "$1500",
      rating: "3.5",
      image:
        "https://i.pinimg.com/1200x/df/da/40/dfda40ed5834750ccea1ebf2e8887a03.jpg",
    },
    {
      id: 11,
      name: "Mac M4 Ram16",
      description: "perfect for work study",
      price: "$1299",
      oldPrice: "$1550",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/55/ef/a4/55efa448ab509f4e6c8f40943f127f97.jpg",
    },
    {
      id: 12,
      name: "Mac Book Pro 32G",
      description: "perfect for work and study",
      price: "$1699.99",
      oldPrice: "$1950",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/d8/1a/cb/d81acba8a216c711a670d53d62a55d4f.jpg",
    },
    {
      id: 13,
      name: "Mac Ram32 2025",
      description: "Perfact for apple lover",
      price: "$1539.99",
      oldPrice: "$1950",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/fd/f0/2c/fdf02c74664b2c48c26afbc9e4ec2a73.jpg",
    },
    {
      id: 14,
      name: "Mac 32g 2020",
      description: "perfect keyboard",
      price: "$1650",
      oldPrice: "$1750",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/2f/0e/d4/2f0ed4b3eaef3e215c172443ad705228.jpg",
    },
    {
      id: 15,
      name: "Mac 2024 M2",
      description: "workflow is so smooth",
      price: "$1360",
      oldPrice: "$1470",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/a7/bf/e3/a7bfe3a809fe395271866620be877097.jpg",
    },
    {
      id: 16,
      name: "Mac 8G 2026",
      description: "Colorful, sleek",
      price: "$999",
      oldPrice: "$1200",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/18/e7/e0/18e7e05fb369b7db518a2be9ddeccfe0.jpg",
    },
    {
      id: 17,
      name: "Mac 16G 2026",
      description: "best for work",
      price: "$1200",
      oldPrice: "$1500",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/08/b1/91/08b191fd3abc9816a201bf89bd434a2f.jpg",
    },
    {
      id: 18,
      name: "Mac 8G 2022",
      description: "best for study",
      price: "$950",
      oldPrice: "$1000",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/a4/73/16/a4731647a5eb3ec99b3d6d2ecd67a2b0.jpg",
    },
    {
      id: 19,
      name: "Mac 32G 2026",
      description: "best for work and design",
      price: "$2400",
      oldPrice: "$2690",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/9e/1f/3f/9e1f3fd36e7d7325c1b3ddda945d7edf.jpg",
    },
    {
      id: 20,
      name: "Mac Neo 8G",
      description: "easy for study and work",
      price: "$880",
      oldPrice: "$990",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/e5/0b/57/e50b573552012406497a13da522e7ae9.jpg",
    },
    {
      id: 21,
      name: "Mac 2026 32G",
      description: "New Product",
      price: "$1990",
      oldPrice: "$2000",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/ad/ab/a5/adaba524fba3c4e79e3c97795b6b044c.jpg",
    },
    {
      id: 22,
      name: "Mac Pro M4 32G",
      description: "easy for student and worker",
      price: "$2250",
      oldPrice: "$2570",
      rating: "4.5",
      image:
        "https://i.pinimg.com/236x/bb/ee/b4/bbeeb41ed3af7acb286432e61a5500b3.jpg",
    },
    {
      id: 23,
      name: "Mac Neo 32G",
      description: "easy for student and worker",
      price: "$1350",
      oldPrice: "$1470",
      rating: "4.5",
      image:
        "https://i.pinimg.com/236x/60/af/57/60af57aeef21dbaa1b916dc2c0a85af0.jpg",
    },
    {
      id: 24,
      name: "Asus Rog 16G",
      description: "easy for student and designer",
      price: "$1100",
      oldPrice: "$1170",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/09/15/0e/09150e94c68202c088de907a3f054ed3.jpg",
    },
     {
      id: 25,
      name: "Asus 8G",
      description: "easy for student and designer",
      price: "$530",
      oldPrice: "$700",
      rating: "4.5",
      image:
        "https://i.pinimg.com/236x/f3/51/9f/f3519fd1f93da019018fa6de6aaeba41.jpg",
    },
   {
      id: 26,
      name: "Asus 32G",
      description: "easy for student and designer",
      price: "$1400",
      oldPrice: "$1700",
      rating: "4.5",
      image:
        "https://i.pinimg.com/236x/06/55/03/065503c725760e3053473a89239df726.jpg",
    },
     {
      id: 27,
      name: "Asus 16G",
      description: "easy for student and designer",
      price: "$900",
      oldPrice: "$1000",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/54/99/50/5499509b312270e8a1086ecd1e7cfece.jpg",
    },
  {
      id: 28,
      name: "Asus Tuf 16G",
      description: "easy for student and designer",
      price: "$999",
      oldPrice: "$1200",
      rating: "4.5",
      image:
        "https://i.pinimg.com/736x/2d/93/ed/2d93ed63969385f37096b396868a7f93.jpg",
    },
    {
      id: 29,
      name: "Asus Tuf 8G",
      description: "easy for student and designer",
      price: "$500",
      oldPrice: "$670",
      rating: "4.5",
      image:
        "https://i.pinimg.com/1200x/45/55/c0/4555c04663e7db57054960c82cd126c3.jpg",
    },
  ];
   const handleAddToCart = (product) => {
    console.log("Added to cart:", product.name);
  };

  return (
    <div>
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
    </div>
  )
}

export default Laptop ;
