import React from "react";
import styles from "./logoSlider.module.css";

export const services = [
  "Interactive Wall",
  "Interactive Book",
  "QR Code",
  "Giant Piano",
  "360 Degree Selfie",
  "Social Wall",
  "Light Painting",
  "Motion Sensor",
  "Augmented Reality",
  "Fog Curtain",
  "Gesture Control",
  "Giant Selfie",
];

export default function LogoSlider() {
  return (
    <section className={styles.LogoSlider}>
      <div className={styles.slideWrapper}>
        <div className={styles.slideContainer}>
          {services?.map((item, index) => (
            <div className={styles.paraContainer} key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className={styles.slideContainer}>
          {services?.map((item, index) => (
            <div className={styles.paraContainer} key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
