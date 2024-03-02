import React from "react";
import styles from "./footer.module.css";
import logo from "./../../assets/logo.png";
import { PiMapPinLineLight } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerOne}>
        <p>
          Let's talk about the next <br />
          wonderful event
        </p>
        <button className="btn2">Contact Now</button>
      </div>

      <div className={styles.footerTwo}>
        <div className={styles.footerLogoContainer}>
          <div className={styles.footerLogo}>
            <img src={logo} alt="footerLogo" />
          </div>
          <p>
            Just a sassy events agency committed to streamlining your events,
            infusing vibrancy, and delivering concise experiences.
          </p>
        </div>
        <div className={styles.explore}>
          <strong>EXPLORE</strong>
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
        </div>
        <div className={styles.footerContact}>
          <strong>CONTACT</strong>
          <address>
            <PiMapPinLineLight /> India
          </address>
          <p>
            <IoCallOutline /> +122 167 265 455
          </p>
          <p>
            <CiMail /> humans@phoenix.com
          </p>
          <strong>FOLLOW US ON</strong>
          <div className={styles.socialMedia}>
            <CiFacebook />
            <SlSocialTwitter />
            <CiLinkedin />
          </div>
        </div>
      </div>

      <div className={styles.footerThree}>
        <small>© 2023 Phoneix MediaLtd. All rights reserved.</small>
      </div>
    </div>
  );
}
