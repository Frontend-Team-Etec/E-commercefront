import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Featured_Product from './components/Featured_Product'



const App = () => {
  return (
    <div>
    
   <Navbar/>
   
   <Hero/>

    <Categories/>
    <Featured_Product/>
    </div>
  )
}

export default App
