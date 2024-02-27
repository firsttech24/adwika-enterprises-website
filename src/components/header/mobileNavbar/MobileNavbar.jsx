import React from "react";
import styles from "./mobileNavbar.module.css";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";

export default function MobileNavbar({ setIsShowSidebar, isShowSidebar }) {
  return (
    <nav
      className={`${styles.MobileNavbar} ${
        isShowSidebar ? styles.showSidebar : ""
      }`}
    >
      <ul>
        <Link to={"/"} onClick={() => setIsShowSidebar(false)}>
          <li>Home</li>
        </Link>
        <Link to={"/about"} onClick={() => setIsShowSidebar(false)}>
          <li>About</li>
        </Link>
        <Link to={"/about"} onClick={() => setIsShowSidebar(false)}>
          <li>Services</li>
        </Link>
        <Link to={"/about"} onClick={() => setIsShowSidebar(false)}>
          <li>Projects</li>
        </Link>
        <Link to={"/about"} onClick={() => setIsShowSidebar(false)}>
          <li>Testimonials</li>
        </Link>
        <Link to={"/about"} onClick={() => setIsShowSidebar(false)}>
          <li>Contact</li>
        </Link>
      </ul>
      <IoIosCloseCircle onClick={() => setIsShowSidebar(false)} />
    </nav>
  );
}
