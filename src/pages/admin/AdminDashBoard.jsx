/** @format */

import React, { useEffect, useState } from "react";
import AddProjectForm from "./AddProjectForm";
import styles from "./Admin.module.css";
import { Add } from "@mui/icons-material";
import { db } from "../../config/firebase.js";
import {
  getDocs,
  collection,
  DocumentReference,
  doc,
} from "firebase/firestore";

const AdminDashBoard = () => {
  let [projectAdd, setProjectAdd] = useState(false);
  let [projects, setProjects] = useState([]);

  const getProjectsFromFirebase = async () => {
    let valueRef = collection(db, "project");
    let projectsFromFirebase = await getDocs(valueRef);
    let alldata = projectsFromFirebase.docs.map((val) => ({
      ...val.data(),
      id: val.id,
    }));
    setProjects(alldata);
    console.log(alldata);
  };

  useEffect(() => {
    getProjectsFromFirebase();
  }, []);
  return (
    <div className={styles.dashboard}>
      {projectAdd && <AddProjectForm setProjectAdd={setProjectAdd} />}
      {!projectAdd && (
        <div>
          <div
            className={styles.addbox}
            onClick={() => setProjectAdd(true)}>
            <Add /> <span>Add New Project</span>
          </div>
          {projects.map((item, ind) => (
            <div
              key={ind}
              className={styles.projectBox}>
              <div className={styles.projectLeft}>
                <img
                  src={item.coverImage}
                  alt=""
                />
              </div>
              <div className={styles.projectRight}>
                <h2>{item.projectName}</h2>
                <h2>{item.location}</h2>
                <h2>{item.timeline}</h2>
                <h2>{item.description}</h2>
                <h2>See more</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashBoard;
