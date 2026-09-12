import React from "react";

const Navbar = () => {
  return (
    
      
             <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-11 h-11 bg-black rounded-xl flex items-center justify-center">
              <span className="text-white text-xl font-bold">S</span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Shop<span className="text-blue-600">Zone</span>
              </h1>

              <p className="text-[10px] text-gray-400 tracking-[3px]">
                E-COMMERCE
              </p>
            </div>
          </div>

          {/* ================= SEARCH ================= */}
          <div className="hidden md:flex items-center w-[380px] h-11 bg-gray-50 border border-gray-200 rounded-full px-4">
            <span className="text-gray-400 text-lg">🔍</span>

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-transparent outline-none px-3 text-sm text-gray-700 placeholder-gray-400"
            />

            <button className="text-xs font-medium text-gray-500 hover:text-blue-600">
              Search
            </button>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="hidden lg:flex items-center gap-7">
            <a
              href="/"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition"
            >
              Home
            </a>

            <a
              href="/shop"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition"
            >
              Shop
            </a>

            <a
              href="/categories"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition"
            >
              Categories
            </a>

            <a
              href="/deals"
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition"
            >
              Deals
            </a>
          </div>

          {/* ================= ACTIONS ================= */}
          <div className="flex items-center gap-3">
            {/* Wishlist */}
            <button
              className="relative w-10 h-10 rounded-full
                       bg-gray-50 hover:bg-blue-50
                       flex items-center justify-center
                       transition duration-300"
            >
              <span className="text-lg">♡</span>

              <span
                className="absolute -top-1 -right-1
                         w-4 h-4 bg-blue-600
                         text-white text-[9px]
                         rounded-full flex items-center justify-center"
              >
                0
              </span>
            </button>

            {/* Cart */}
            <button
              className="relative w-10 h-10 rounded-full
                       bg-gray-50 hover:bg-blue-50
                       flex items-center justify-center
                       transition duration-300"
            >
              <span className="text-lg">🛒</span>

              <span
                className="absolute -top-1 -right-1
                         w-4 h-4 bg-blue-600
                         text-white text-[9px]
                         rounded-full flex items-center justify-center"
              >
                2
              </span>
            </button>

            {/* User */}
            <button
              className="w-10 h-10 rounded-full
                       bg-gray-50 hover:bg-blue-50
                       flex items-center justify-center
                       transition duration-300"
            >
              <span className="text-lg">👤</span>
            </button>

            {/* Login */}
            <button
              className="hidden sm:block
                       ml-2 px-5 py-2.5
                       bg-gray-900 text-white
                       rounded-full text-sm font-semibold
                       hover:bg-blue-600
                       transition-all duration-300
                       hover:shadow-lg"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
       
     


    




    
  );
};

export default Navbar;
