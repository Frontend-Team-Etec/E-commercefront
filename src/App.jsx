import React from 'react'
import Banner1 from './components/khotyem/Banner1'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured_Product from './components/Featured_Product'
import Categories from './components/Categories'
import Category from './components/khotyem/Category'
import RecentlyAddedProduct from './components/khotyem/RecentlyAddedProduct'







const App = () => {
  return (
    <div>
      {/* panha */}
      <Navbar/>
      <Hero/>
      <Categories/>
      <Featured_Product/>

      {/* khotyem */}
    
    <Banner1/>
    <Category/>
    <RecentlyAddedProduct/>


    </div>
  )
}

export default App
