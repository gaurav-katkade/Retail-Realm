import React from "react";
import HeroSection from "./Components/HeroSection";
import Service from "./Components/Service";
import Trusted from "./Components/Trusted";
import FeaturedProduct from "./Components/FeaturedProduct";



const Home = () => {
  return<>
    <HeroSection headingName = "Retail Realm" ></HeroSection>
    <Service></Service>
    <FeaturedProduct/>
    <Trusted></Trusted>
    </>;
};

export default Home;