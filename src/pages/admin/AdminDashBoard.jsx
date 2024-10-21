/** @format */

import React, { useEffect, useState } from "react";
import AddProjectForm from "./AddProjectForm";
import styles from "./Admin.module.css";
import { Add } from "@mui/icons-material";
import { db } from "../../config/firebase.js";
import {
  getDocs,
  collection,
  doc,
  onSnapshot,
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
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'project'), (snapshot) => {
      try {
        const alldata = snapshot.docs.map((item) => ({
          ...item.data(), // Call data() method to get the document data
          id: item.id,
        }));
        alldata.sort((a,b)=>b.timeStamp-a.timeStamp)
        setProjects(alldata);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    });
  
    return () => unsubscribe();
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
          <StickyHeadTable projects={projects} />
        </div>
      )}
    </div>
  );
};

export default AdminDashBoard;
