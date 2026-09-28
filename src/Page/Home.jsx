
import React from "react";
import Hero from "../components/Hero";
import Featured_Product from "../components/Featured_Product";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories/>
      <Featured_Product />
      <Footer/>
    </div>
  );
};

export default Home;
