import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import AOS from "aos";
import "aos/dist/aos.css"
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testmonials/Testmonials";
import Footer from "./components/Footer/Footer";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  AOS.refresh();
  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Products />
      <TopProducts/>
      <Banner/>
      <Contact/>
      <Products />
      <Testimonials/>
      <Footer/>
    </div>
  );
};
export default App;
