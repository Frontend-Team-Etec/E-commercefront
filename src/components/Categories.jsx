import React from 'react'

const Categories = () => {
    const categories = [{ name: "phone", image: "/Phone.jpg", products: "120+ Products", },
    { name: "Laptops", image: "/Laptop.jpg", products: "85+ Products", },
    { name: "Headphones", image: "/hero.jpg", products: "64+ Products", },
    { name: "Cameras", image: "/Camera.jpg", products: "42+ Products", },
    { name: "Smart Watches", image: "/Smartwatch.jpg", products: "38+ Products", },
    { name: "Accessories", image: "/accessories.jpg", products: " Explore more", },
    ];
    return (
        <div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* HEADER */}

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

                        <div>

                            
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2"> Shop by Category </h2>
                            <p className="text-gray-500 mt-3 max-w-lg"> Explore our wide range of products and find everything you need in one place. </p>

                        </div>

                        <button className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition"> View All Categories → </button>
                    </div>

                    {/* CATEGORY GRID */}

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => (<div key={index}
                            className=" group relative bg-gray-50 border border-gray-100 rounded-2xl p-6 cursor-pointer text-center 
                                overflow-hidden hover:bg-white hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 " >

                            {/* TOP BLUE LINE */}

                            <div className=" absolute top-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 " >

                            </div>

                            {/* ICON */}

                            <div className=" w-16 h-16 mx-auto rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-3xl group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300 " >
                                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                            </div> 
                                
                                {/* CATEGORY NAME */}
                                 <h3 className=" mt-5 font-bold text-gray-900 group-hover:text-blue-600 transition " >
                                {category.name} </h3>
                                
                                 {/* PRODUCTS */}
                                  <p className="text-xs text-gray-400 mt-2">
                                {category.products} </p> 
                                
                                {/* ARROW */}
                                 <div className=" mt-4 text-sm text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 " >
                                → </div>

                        </div>))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories
