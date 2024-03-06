import React from "react";
import styles from "./homePage.module.css";
import About from "../../components/home/about/About";
import Hero from "../../components/home/hero/Hero";
import WhatWeDo from "../../components/home/whatWeDo/WhatWeDo";
import LogoSlider from "../../components/home/logoSlider/LogoSlider";
import Portfolio from "../../components/home/portfolio/Portfolio";
import Testimonials from "../../components/home/testimonials/Testimonials";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      {/* hero section */}
      <Hero />

      {/* about section */}
      <About />

      {/* what we do section */}
      <WhatWeDo />

      {/* client's logo slider */}
      <LogoSlider />

      {/* portfolio section */}
      <Portfolio />

      {/* testimonials */}
      <Testimonials />
    </div>
  );
}
