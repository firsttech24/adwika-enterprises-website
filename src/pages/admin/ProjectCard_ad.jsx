/** @format */

// ProjectCard_ad.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ProjectCard_ad.module.css"; // Import the CSS module
import { Delete, EditNote, EditSharp } from "@mui/icons-material";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const ProjectCard_ad = ({}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { coverImage, projectName, scope, category, designedBy, description, galleryPhotos, id } =
    location.state;

  const deleteFirebase = async () => {
    try {
      await deleteDoc(doc(db, "project", id));
      navigate("/admin/dashboard");
    } catch (error) {
      alert("Deletion unsuccessfull");
    }
  };

  const handleDelete = () => {
    let ans = window.prompt("Enter Project Name");
    if (ans == projectName) {
      let pass = window.prompt("Enter Password");
      if (pass == "adwika@@") deleteFirebase();
      else alert("incorrect password");
    } else alert("incorrect name");
  };
  const handleEdit = () => {
    navigate("/admin/project/edit", { state: location.state });
  };

  return (
    <div className={styles.container}>
      <div className={styles.actionContainer}>
        <button
          className={styles.projectEditButton}
          onClick={handleEdit}>
          Edit Project
        </button>
        <button
          className={styles.projectDeleteButton}
          onClick={handleDelete}>
          Delete Project
        </button>
      </div>
      <div className={styles.firstDiv}>
        <div className={styles.projectInfo}>
          <img
            src={coverImage}
            className={styles.imgStyle}
            alt=""
          />
        </div>
        <div className={styles.projectInfo}>
          <h3>Name - {projectName}</h3>
          <p>Scope of Work - {scope}</p>
          <p>Location - {location.state.location}</p>
          <p>Category - {category}</p>
          <p>Designed By - {designedBy}</p>
          <p>description - {description}</p>
        </div>
      </div>
      <div className={styles.galleryContainer}>
        {galleryPhotos?.map((item, index) => (
          <div
            key={index}
            className={styles.galleryItemWrapper}>
            <img
              src={item}
              className={styles.galleryItem}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard_ad;
