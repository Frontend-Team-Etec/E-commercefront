import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ShopZone */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Shop<span className="text-blue-600">Zone</span>
                </h2>

                <p className="text-[10px] text-gray-400 tracking-wider">
                  E-COMMERCE
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-6 max-w-xs">
              Discover amazing products at great prices.
              Quality products, fast delivery, and excellent service.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition"
              >
                ◎
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition"
              >
                ▶
              </a>

            </div>
          </div>


          {/* Shop */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5">
              Shop
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  All Products
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  Featured Products
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  Special Offers
                </a>
              </li>

            </ul>
          </div>


          {/* Customer Service */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  Shipping Information
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  Returns & Refunds
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  Privacy Policy
                </a>
              </li>

            </ul>
          </div>


          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5">
              Stay Updated
            </h3>

            <p className="text-sm text-gray-500 leading-6 mb-4">
              Subscribe to our newsletter and get the latest products,
              offers, and updates.
            </p>

            <form className="flex flex-col gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                Subscribe
              </button>

            </form>

            <p className="text-xs text-gray-400 mt-3">
              We respect your privacy.
            </p>
          </div>

        </div>
      </div>


      {/* Bottom Footer */}
      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row justify-between items-center gap-3">

            <p className="text-sm text-gray-500">
              © {currentYear}{" "}
              <span className="font-medium text-gray-700">
                ShopZone
              </span>
              . All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-xs text-gray-400">
              <span>🔒 Secure Payment</span>
              <span>🚚 Fast Delivery</span>
              <span>↩ Easy Returns</span>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;