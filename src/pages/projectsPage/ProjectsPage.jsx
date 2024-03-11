/** @format */

import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import styles from "./projectPage.module.css";
import SimpleBackdrop from "../../Overlay.jsx";
import { LocationOn, Timelapse } from "@mui/icons-material";

const Card = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.card}>
      <img
        src={
          imageError
            ? "https://img.freepik.com/free-vector/building-concept-illustration_114360-160.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699920000&semt=ais"
            : item.coverImage
        }
        alt=""
        onError={handleImageError}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{item.projectName}</div>
        <div className={styles.cardLocation}>
          <LocationOn /> {item.location}
        </div>
        <div className={styles.cardTimeline}>
          <Timelapse /> {item.timeline}
        </div>
        <div className={styles.seeMore}>See More</div>
      </div>
    </div>
  );
};
export default function ProjectsPage() {
  let [projects, setProjects] = useState([]);
  let [loading, setLoading] = useState(false);

  const getProjectsFromFirebase = async () => {
    setLoading(true);
    let valueRef = collection(db, "project");
    let projectsFromFirebase = await getDocs(valueRef);
    let alldata = projectsFromFirebase.docs.map((val) => ({
      ...val.data(),
      id: val.id,
    }));
    setProjects(alldata);
    setLoading(false);
  };

  useEffect(() => {
    getProjectsFromFirebase();
  }, []);

  return (
    <>
      {loading ? <SimpleBackdrop /> : <></>}
      <div className={styles.ProjectsPage}>
        {projects.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </>
  );
}
