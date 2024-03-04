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
import StickyHeadTable from "./StickyHeadTable.jsx";

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
          <StickyHeadTable projects={projects}/>
        </div>
      )}
    </div>
  );
};

export default AdminDashBoard;
