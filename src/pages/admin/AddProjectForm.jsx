/** @format */

import React, { useState } from "react";
import styles from "./AddProjectForm.module.css";
import { imagedb } from "../../config/firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { db } from "../../config/firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import SimpleBackdrop from "../../Overlay.jsx";

const AddProjectForm = ({ setProjectAdd }) => {
  let [imageMessage, setImageMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    location: "",
    coverImage: null,
    description: "",
    galleryPhotos: [],
    scope: "",
    category : "",
    designedBy : ""
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
    setLoading(true);
    if (formData.projectName.trim() == "") {
      alert("first type project name and then upload again...");
    } else {
      let arr = formData.galleryPhotos;
      for (let i = 0; i < e.target.files.length; i = i + 1) {
        let imageRef = ref(imagedb, `/project/${formData.projectName}/${v4()}`);
        await uploadBytes(imageRef, files[i]);
        const imageUrl = await getDownloadURL(imageRef);
        if (imageUrl) {
          arr.push(imageUrl);
        }
      }
      setFormData((prevData) => ({
        ...prevData,
        galleryPhotos: arr,
      }));
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    if (imageMessage) {
      try {
        const valueRef = collection(db, `project`);
        setLoading(true);
        const result = await addDoc(valueRef, formData);
        setLoading(false);
        setProjectAdd(false);
      } catch (error) {
        console.log(error);
        alert("data upload failed..., kindly check your data...");
      }
    } else alert("files are loading, kindly wait for some time...");
  };

  return (
    <>
      {loading ? <SimpleBackdrop /> : <></>}
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        encType="multipart/form-data">
        <label
          className={styles.label}
          htmlFor="projectName">
          Project Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="projectName"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
          required
        />

        <label
          className={styles.label}
          htmlFor="location">
          Location:
        </label>
        <input
          className={styles.input}
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label
          className={styles.label}
          htmlFor="scope">
          Scope Of Work:
        </label>
        <input
          className={styles.input}
          type="text"
          id="scope"
          name="scope"
          value={formData.scope}
          onChange={handleChange}
          required
        />

        <label
          className={styles.label}
          htmlFor="category">
          Category:
        </label>
        <input
          className={styles.input}
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label
          className={styles.label}
          htmlFor="designedBy">
          Designed By:
        </label>
        <input
          className={styles.input}
          type="text"
          id="designedBy"
          name="designedBy"
          value={formData.designedBy}
          onChange={handleChange}
          required
        />

        <label
          className={styles.label}
          htmlFor="coverImage">
          Cover Image:
        </label>
        <input
          className={styles.fileInput}
          type="file"
          id="coverImage"
          name="coverImage"
          onChange={handleImageChange}
          accept="image/*"
          required
        />

        <label
          className={styles.label}
          htmlFor="galleryPhotos">
          Gallery Photos:
        </label>
        <input
          className={styles.fileInput}
          type="file"
          id="galleryPhotos"
          name="galleryPhotos"
          onChange={handleGalleryChange}
          accept="image/*"
          multiple
        />

        <label
          className={styles.label}
          htmlFor="description">
          Description:
        </label>
        <textarea
          className={styles.textarea}
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />

        <button
          className={styles.submitButton}
          type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddProjectForm;
