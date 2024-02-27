import React from "react";
import styles from "./homePage.module.css";
import About from "../../components/home/about/About";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      HOmePage
      <About />
    </div>
  );
}
