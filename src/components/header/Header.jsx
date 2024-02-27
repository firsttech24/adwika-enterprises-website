import React, { useState } from "react";
import styles from "./header.module.css";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import logo from "./../../assets/logo.png";
import DesktopNavbar from "./desktopNavbar/DesktopNavbar";
import MobileNavbar from "./mobileNavbar/MobileNavbar";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <div className={styles.Header}>
      <div className={styles.headerOne}>
        <address>
          Flat No. - 253, Pocket - 1, Sector - 9, Dwarka, New Delhi - 110075
        </address>
        <div className={styles.rightContainer}>
          <p>bikash@adwikaenterprises.com</p>
          <div className={styles.socialMedia}>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaWhatsapp />
          </div>
        </div>
      </div>
      <div className={styles.headerTwo}>
        <Link to={"/"}>
          <div className={styles.imgContainer}>
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <div className={styles.navbarContainer}>
          <div className={styles.desktopNavbar}>
            <DesktopNavbar />
          </div>

          <div className={styles.mobileNavbar}>
            <MobileNavbar
              setIsShowSidebar={setIsShowSidebar}
              isShowSidebar={isShowSidebar}
            />
          </div>
          <FaBarsStaggered onClick={() => setIsShowSidebar(true)} />
        </div>
      </div>
    </div>
  );
}
