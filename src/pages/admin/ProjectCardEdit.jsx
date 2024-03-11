/** @format */

import React, { useEffect, useState } from "react";
import styles from "./ProjectCardEdit.module.css";
import SimpleBackdrop from "../../Overlay.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import { imagedb } from "../../config/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";
import { db } from "../../config/firebase.js";
import { doc, addDoc, collection, updateDoc } from "firebase/firestore";

const Card = ({ item, handlePhotoDelete }) => {
  return (
    <div className={styles.galleryItemWrapper}>
      <img
        src={item}
        className={styles.galleryItem}
        alt=""
        loading="lazy"
      />
      <button className={styles.deleteButton}>
        <Delete
          onClick={() => {
            handlePhotoDelete(item);
          }}
        />
      </button>
    </div>
  );
};

const ProjectCardEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    id: "",
    projectName: "",
    location: "",
    timeline: "",
    description: "",
    coverImage: "",
    galleryPhotos: [],
  });

  useEffect(() => {
    let newData = {
      id: location.state.id,
      projectName: location.state.projectName,
      location: location.state.location,
      timeline: location.state.timeline,
      description: location.state.description,
      coverImage: location.state.coverImage,
      galleryPhotos: location.state.galleryPhotos,
    };
    setData(newData);
  }, [location.state]);

  const handleReplaceCoverImage = (e) => {
    if (data.coverImage) handleRemoveCoverImage(e);
    handleImageChange(e);
  };

  const handleRemoveCoverImage = () => {
    const fileRef = ref(imagedb, data.coverImage);
    setLoading(true);
    deleteObject(fileRef).then(() => {
      setData((prevData) => ({
        ...prevData,
        coverImage: "",
      }));
    });
    setLoading(false);
  };

  const handleImageChange = async (e) => {
    const { name, value, files } = e.target;
    setLoading(true);
    if (data.projectName.trim() == "") {
      alert("first type project name and then upload again...");
    } else {
      let imageRef = ref(imagedb, `/project/${data.projectName}/${v4()}`);
      await uploadBytes(imageRef, files[0]);
      const imageUrl = await getDownloadURL(imageRef).then(
        console.log("uploaded...")
      );
      setData((prevData) => ({
        ...prevData,
        coverImage: imageUrl,
      }));
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleGalleryChange = async (e) => {
    const { name, value, files } = e.target;
    setLoading(true);
    if (data.projectName.trim() == "") {
      alert("first type project name and then upload again...");
    } else {
      let arr = data.galleryPhotos;
      for (let i = 0; i < e.target.files.length; i = i + 1) {
        let imageRef = ref(imagedb, `/project/${data.projectName}/${v4()}`);
        await uploadBytes(imageRef, files[i]);
        const imageUrl = await getDownloadURL(imageRef);
        if (imageUrl) {
          arr.push(imageUrl);
        }
      }
      setData((prevData) => ({
        ...prevData,
        galleryPhotos: arr,
      }));
      setLoading(false);
    }
  };

  const handlePhotoDelete = async (link) => {
    const fileRef = ref(imagedb, link);

    setLoading(true);
    await deleteObject(fileRef).then(() => {
      console.log("delete");
    });
    const newGallery = data.galleryPhotos.filter((item) => item !== link);
    setData((prevData) => ({
      ...prevData,
      galleryPhotos: newGallery,
    }));

    setLoading(false);
  };

  const handleSubmit = async () => {
    let pass = window.prompt("Enter Password");
    if (pass == "adwika@@") {
      setLoading(true);
      const docRef = doc(db, "project", data.id);
      await updateDoc(docRef, data);
      setLoading(false);
      navigate("/admin/dashboard");
    }
    else alert("incorrect password");
  };

  return (
    <>
      {loading ? <SimpleBackdrop /> : <></>}
      <div className={styles.projectCardEdit}>
        <div className={styles.formHeader}>
          <h1>Project Edit Form</h1>
          <button
            className={styles.submitButton}
            onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className={styles.coverSection}>
          <img
            className={styles.coverImage}
            src={data.coverImage}
            alt="Cover Image"
          />
          <div className={styles.uploadSection}>
            <input
              type="file"
              id="coverImage"
              className={styles.inputfielduploadsection}
              onChange={(e) => handleReplaceCoverImage(e)}
            />
            <label
              htmlFor="coverImage"
              className={styles.replaceCoverImageButton}>
              Replace
            </label>
            <button
              className={styles.removeCoverImageButton}
              onClick={handleRemoveCoverImage}>
              Remove
            </button>
          </div>
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.inputGroup}>
            <label htmlFor="projectName">Project Name:</label>
            <input
              type="text"
              id="projectName"
              placeholder="Enter project name"
              value={data.projectName}
              onChange={() => {
                alert("not allowed");
              }}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="timeline">Timeline:</label>
            <input
              type="text"
              id="timeline"
              placeholder="Enter project timeline"
              value={data.timeline}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              placeholder="Enter project location"
              value={data.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.descriptionSection}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            placeholder="Enter project description"
            className={styles.textArea}
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div className={styles.gallerySection}>
          <span styles={styles.galleryLabel}> Gallery Photos</span>

          <div className={styles.inputGroup}>
            <label styles={styles.galleryLabel}> Add More</label>
            <input
              className={styles.fileInput}
              type="file"
              id="galleryPhotos"
              name="galleryPhotos"
              onChange={(e) => handleGalleryChange(e)}
              accept="image/*"
              multiple
            />
          </div>
          <div className={styles.galleryContainer}>
            {data.galleryPhotos &&
              data.galleryPhotos?.map((item, index) => (
                <Card
                  item={item}
                  key={index}
                  handlePhotoDelete={handlePhotoDelete}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCardEdit;
