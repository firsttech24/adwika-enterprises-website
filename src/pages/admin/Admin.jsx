/** @format */

import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";

const Path = ({ path }) => {
  const handleClick = (item) => {
    const link = "";
    // while(item !)
  };
  return (
    <div className={styles.pathBox}>
      <ul>
        {path?.map((item, key) => (
          <li
            key={key}
            onClick={() => handleClick(item)}>
            {" "}
            {item ? item : "Home"}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Admin = () => {
  const [path, setPath] = useState(["home"]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let log = window.localStorage.getItem("adwikaenterprisescom@23");
    if (!log) navigate("/admin/login");
  }, []);

  useEffect(() => {
    setPath(location.pathname.split("/"));
  }, [location]);

  return (
    <>
      <Path path={path} />
      <Outlet />
    </>
  );
};

export default Admin;
