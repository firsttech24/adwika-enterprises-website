/** @format */

import React from "react";
import styles from "./aboutPage.module.css";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";

export default function AboutPage() {
  return (
    <div className={styles.AboutPage}>
      <div className={styles.abt}>
        <div className={styles.abtFirstRow}>
          <h1>ABOUT ADWIKA ENTERPRISES</h1>
          <p>
            Since our inception in 2004, specializing in corporate, commercial,
            retail, and hospitality interior work, our organization has achieved
            consistent growth. Executing prestigious projects for a discerning
            clientele, we've maintained their full satisfaction, fostering a
            steady year-over-year expansion.
          </p>
        </div>
        <div className={styles.abtSecondRow}>
          <div className={styles.img}>
            <img
              src="/aboutImages/about_nrw2.jpg"
              alt=""
            />
          </div>
          <div className={styles.text}>
            <h4>ABOUT OUR VISION</h4>
            <p>
              Embedded in our vision is an unyielding commitment to
              environmental stewardship, aimed at advancing societal well-being.
              We pledge to concurrently pursue business and financial success
              while intricately weaving a positive impact into the communities
              we serve. This dual commitment forms the core of our strategy,
              blending economic prosperity with a heartfelt dedication to
              environmental responsibility.
            </p>
            <p>
              {" "}
              Our journey extends beyond financial gains; it is a purposeful,
              sustainable endeavor aiming to forge enduring positive impacts on
              the environment and the broader community. Through this integrated
              approach, we aspire to navigate a course that resonates with
              success while steadfastly upholding the foundational principles of
              societal well-being. Our commitment is not mere rhetoric but is
              manifested in initiatives like [mention specific projects]. These
              underscore our proactive stance in addressing environmental
              challenges while contributing to the betterment of our operational
              communities.
            </p>
          </div>
        </div>
        <div className={styles.abtThirdRow}>
          <div className={styles.img}>
            <img
              src="/aboutImages/about_nrw3.png"
              alt=""
            />
          </div>
          <div className={styles.text}>
            <h4>OUR MISSION</h4>
            <p>
              At the core of our organizational ethos is a mission to position
              ourselves as India's leading contracting company, unwaveringly
              dedicated to exceeding customer expectations. Our primary focus is
              on delivering unparalleled customer satisfaction, setting new
              benchmarks in the contracting industry. We are committed to not
              only meeting but surpassing the diverse needs of our clients.
            </p>{" "}
            <p>
              In the pursuit of excellence, our mission extends beyond client
              interactions to the heart of our organization – our employees. We
              seek to foster an environment that goes beyond the conventional
              employer-employee relationship. Our vision is to create
              opportunities that lead to increased financial rewards and
              personal growth for our employees, acknowledging them as integral
              contributors to our collective success.
            </p>{" "}
            <p>
              {" "}
              Furthermore, we firmly believe in cultivating a workplace built on
              honesty, reliability, and integrity. These values form the
              foundation of our company culture, influencing every decision and
              action we undertake. We recognize that by upholding these
              principles, we not only fortify the internal fabric of our
              organization but also enhance the trust and confidence our clients
              place in us.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.why}>
        <h2>WHY ADWIKA ENTERPRISES</h2>
        <div className={styles.whybox}>
          <div className={styles.card}>
            <span>
              <ChecklistRtlIcon />
            </span>
            <p>
              Adwika Enterprises can transform your requirements to finely
              crafted solutions keeping in mind your taste & budget.{" "}
            </p>
          </div>
          <div className={styles.card}>
            <span>
              <ChecklistRtlIcon />
            </span>
            <p>
              We believe that every client has unique requirements & taste. We
              Have design our teams to serve all kind of requirements and that’s
              why we are recognized locally and throughout the country.{" "}
            </p>
          </div>
          <div className={styles.card}>
            <span>
              <ChecklistRtlIcon />
            </span>
            <p>
              Our professional teams will be providing many different design
              styles and endless ideas to give you the best possible solution as
              client satisfaction is our top priority.{" "}
            </p>
          </div>
          <div className={styles.card}>
            <span>
              <ChecklistRtlIcon />
            </span>
            <p>
              You will encounter high quality achievements from the moment we
              start planning your project until the moment you walk into your
              completed premises.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.team}>
        
      </div>
      <div>// pattern</div>
    </div>
  );
}
