
import React from "react";

const Dtail_feature = () => {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      description: "Latest Apple smartphone",
      price: "$999",
      oldPrice: "$1,099",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 2,
      name: "MacBook Air",
      description: "Powerful laptop for work",
      price: "$1,199",
      oldPrice: "$1,299",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 3,
      name: "AirPods Pro",
      description: "Premium wireless audio",
      price: "$189",
      oldPrice: "$239",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 4,
      name: "Canon Camera",
      description: "Capture every moment",
      price: "$799",
      oldPrice: "$899",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
    {
      id: 5,
      name: "Smart Watch",
      description: "Smart and stylish",
      price: "$299",
      oldPrice: "$349",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 6,
      name: "Wireless Accessories",
      description: "Useful accessories",
      price: "$49",
      oldPrice: "$69",
      rating: "4.5",
      image:
        "https://images.unsplash.com/photo-1601524909162-ae8725290836?w=500",
    },
    {
      id: 7,
      name: "Wireless Headphone",
      description: "Useful accessories",
      price: "$39",
      oldPrice: "$79",
      rating: "4.0",
      image:
        "https://i.pinimg.com/736x/20/cc/f7/20ccf73437ab5d2e13742ed9bb564bb7.jpg",
    },
    {
      id: 8,
      name: "Girls Backpack School ",
      description: "Useful for girl",
      price: "$39",
      oldPrice: "$79",
      rating: "4.5",
      image:
       "https://i.pinimg.com/736x/73/58/87/735887953df5af6e16741ed41e7c2052.jpg",
    },
    {
      id: 9,
      name: "Boat Bluetooth",
      description: " for who like listen song",
      price: "$35",
      oldPrice: "$50",
      rating: "3.5",
      image:
       "https://i.pinimg.com/736x/ec/48/ca/ec48caf3216e8b6b08ab023b14673dd9.jpg",
    },
     {
      id: 10,
      name: " Best Mechanical mouse",
      description: " gaming mouse for ultimate",
      price: "$29.99",
      oldPrice: "$50",
      rating: "3.5",
      image:
       "https://i.pinimg.com/736x/cb/91/b3/cb91b3f9e07b219fb1368c430c380890.jpg",
    },
     {
      id: 11,
      name: "Asus Laptop",
      description: " perfect for productivity ",
      price: "$29.99",
      oldPrice: "$50",
      rating: "3.5",
      image:
       "https://i.pinimg.com/736x/12/21/5a/12215a349308502f10a0fd297d2f59c0.jpg",
    },
    {
      id: 12,
      name: "Mac Book Pro",
      description: " perfect for work and study ",
      price: "$699.99",
      oldPrice: "$950",
      rating: "5.0",
      image:
       "https://i.pinimg.com/736x/f0/9c/f4/f09cf48a69346b81411c577a13022033.jpg",
    },
    {
      id: 13,
      name: "Comfortable Typing",
      description: "perfect keyboard ",
      price: "$39.99",
      oldPrice: "$50",
      rating: "4.5",
      image:
       "https://i.pinimg.com/1200x/8c/9c/1f/8c9c1f742aec1007d6dbba1894f0ef5a.jpg",
    },
     {
      id: 14,
      name: "Customizable RGB",
      description: "perfect keyboard ",
      price: "$39.99",
      oldPrice: "$50",
      rating: "4.5",
      image:
       "https://i.pinimg.com/736x/b4/01/d6/b401d67c6b28024c85eb8aa43793d723.jpg",
    },
     {
      id: 15,
      name: "YUNZII C75",
      description: "workflow is so smooth ",
      price: "$59.99",
      oldPrice: "$70",
      rating: "4.5",
      image:
       "https://i.pinimg.com/736x/19/7d/2e/197d2ec1b7d6c6e0b019f00ec4d445a0.jpg",
    },
     {
      id: 16,
      name: "Eco-friendly Monitors",
      description: "Colorful, sleek ",
      price: "$170",
      oldPrice: "$200",
      rating: "4.5",
      image:
       "https://i.pinimg.com/1200x/89/e9/c5/89e9c5cd4859d31d03b815ce40cf72ff.jpg",
    },
    {
      id: 17,
      name: " ECM-W3S Sony",
      description: "Take your audio recording ",
      price: "$170",
      oldPrice: "$200",
      rating: "4.5",
      image:
       "https://i.pinimg.com/1200x/67/8a/f5/678af5becfb68e2d172534635172e3a2.jpg",
    },
    {
      id: 18,
      name: "Camera Vlog",
      description: "Take your VDO vlog ",
      price: "$950",
      oldPrice: "$1000",
      rating: "4.5",
      image:
       "https://i.pinimg.com/736x/04/c8/10/04c8108f6c2605a7258d3e4b930e6f00.jpg",
    },
      {
      id: 19,
      name: "Purple Ipad",
      description: "esy for study and work ",
      price: "$400",
      oldPrice: "$690",
      rating: "4.5",
      image:
       "https://i.pinimg.com/1200x/08/58/e9/0858e9f4c6c22d702b1e1161a670d618.jpg",
    },
    {
      id: 20,
      name: "Ipad pro 11",
      description: "esy for study and work ",
      price: "$880",
      oldPrice: "$990",
      rating: "4.5",
      image:
       "https://i.pinimg.com/736x/c2/5a/20/c25a202d166ba17819d5d03c21fc493a.jpg",
    },
    {
      id: 21,
      name: "Iphone 18",
      description: " New Product ",
      price: "$1990",
      oldPrice: "$2000",
      rating: "4.5",
      image:
       "https://i.pinimg.com/736x/e2/5a/23/e25a23989d50137db2eaf616bdeae016.jpg",
    },
   {
      id: 22,
      name: "Huawei Matepad",
      description: " easy for student and worker ",
      price: "$550",
      oldPrice: "$570",
      rating: "4.5",
      image:
       "https://i.pinimg.com/736x/67/84/40/678440e0a40bde940ded5af204eefca1.jpg",
    },
     {
      id: 23,
      name: " Redemi pad 2",
      description: " easy for student and worker ",
      price: "$350",
      oldPrice: "$470",
      rating: "4.5",
      image:
       "https://i.pinimg.com/1200x/a4/c5/43/a4c54384cc8c1424a597c4c643501189.jpg",
    },
      {
      id: 24,
      name: " Ipencil 2nd generation",
      description: " easy for student and designer ",
      price: "$100",
      oldPrice: "$170",
      rating: "4.5",
      image:
       "https://i.pinimg.com/1200x/6f/64/b7/6f64b7b3727a32db4e37483946ed3d39.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product.name);
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-9xl mx-auto px-4">

        {/* Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Shop by Feature
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Explore our products and find everything you need.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Image */}
              <div className="h-40 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover 
                  group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">

                {/* Product Name */}
                <h3 className="text-sm font-semibold text-gray-900 
                  group-hover:text-blue-600 transition-colors"
                >
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 mt-1">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-3">
                  <span className="text-yellow-400">★</span>

                  <span className="text-xs text-gray-500">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-lg font-bold text-blue-600">
                    {product.price}
                  </span>

                  <span className="text-xs text-gray-400 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Add To Cart */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-4 bg-blue-600 text-white text-sm 
                  font-medium py-2 rounded-lg
                  hover:bg-blue-700 active:scale-95 
                  transition-all duration-200"
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

export default Dtail_feature;

