/** @format */

import React, { useState } from "react";
import styles from "./AddProjectForm.module.css";
import { imagedb } from "../../config/firebase.js";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "../../config/firebase.js";
import { addDoc, collection } from "firebase/firestore";

const AddProjectForm = ({ setProjectAdd }) => {
  let [imageMessage, setImageMessage] = useState(null);
  let [galleryMessage, setGalleryMessage] = useState(null);

  const [formData, setFormData] = useState({
    projectName: "",
    location: "",
    coverImage: null,
    description: "",
    galleryPhotos: [],
    timeline: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "coverImage" ? files[0] : value,
    }));
  };

  const handleImageChange = async (e) => {
    const { name, value, files } = e.target;

    if (formData.projectName.trim() == "") {
      alert("first type project name and then upload again...");
    } else {
      let imageRef = ref(imagedb, `/project/${formData.projectName}/${v4()}`);
      await uploadBytes(imageRef, files[0]);
      setImageMessage(false);
      const imageUrl = await getDownloadURL(imageRef).then(
        setImageMessage(true)
      );
      setFormData((prevData) => ({
        ...prevData,
        coverImage: imageUrl,
      }));
    }
  };

  const handleGalleryChange = async (e) => {
    const { name, value, files } = e.target;
    if (formData.projectName.trim() == "") {
      alert("first type project name and then upload again...");
    } else {
      let arr = [];
      for (let i in files) {
        let imageRef = ref(imagedb, `/project/${formData.projectName}/${v4()}`);
        await uploadBytes(imageRef, files[0]);
        setGalleryMessage(false);
        const imageUrl = await getDownloadURL(imageRef);
        if (imageUrl) {
          arr.push(imageUrl);
        }
      }
      setFormData((prevData) => ({
        ...prevData,
        galleryPhotos: arr,
      }));
      setGalleryMessage(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    if (imageMessage && galleryMessage) {
      const valueRef = collection(db, `project`);
      await addDoc(valueRef, formData);
      setProjectAdd(false);
    } else alert("files are loading, kindly wait for some time...");
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      encType="multipart/form-data">
      <label htmlFor="projectName">Project Name:</label>
      <input
        type="text"
        id="projectName"
        name="projectName"
        value={formData.projectName}
        onChange={handleChange}
        required
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label htmlFor="timeline">Timeline:</label>
      <input
        type="text"
        id="timeline"
        name="timeline"
        value={formData.timeline}
        onChange={handleChange}
        required
      />

      <label htmlFor="coverImage">Cover Image:</label>
      <input
        type="file"
        id="coverImage"
        name="coverImage"
        onChange={handleImageChange}
        accept="image/*"
        required
      />

      <label htmlFor="galleryPhotos">Gallery Photos:</label>
      <input
        type="file"
        id="galleryPhotos"
        name="galleryPhotos"
        onChange={handleGalleryChange}
        accept="image/*"
        multiple
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        rows="4"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProjectForm;
