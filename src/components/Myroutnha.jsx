import React from 'react'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Navbar from './components/Navbar'

import Dtail_categiries from './components/Detail_categories/Phone'
import Dtail_feature from './components/Dtail_feature'



const App = () => {
  function Havenavbar() {
    return (
      <div>
        <Navbar/>
        <Outlet/>
        {/* <Footer/> */}
      </div>
    )
  }
  return (
    <div>
      
  <UserLogin/>
      <BrowserRouter>
        <Routes>
          <Route element={<Havenavbar/>}>
           <Route path='/' element={<Home/>}/>
             <Route path='/dtail_categories' element={<Dtail_categiries/>}/>
            <Route path='/dtail_feature' element={<Dtail_feature/>}/>

          </Route>
        </Routes>
      </BrowserRouter>


      
    </div>
  )
}

export default App
