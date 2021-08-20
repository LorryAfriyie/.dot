import React from "react";
// Website view components
import NavigationMenu from "./components/nav";
import Hero from "./components/hero";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Carousel from "./components/carousel";
import Team from "./components/team";
import PricingCard from "./components/pricingCard";
import Parallax from "./components/parallax";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App" data-spy={"scroll"}>
      <NavigationMenu />
      <Hero />
      <Section1 />
      <Section2 />
      <Carousel />
      <PricingCard />
      <Parallax />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
