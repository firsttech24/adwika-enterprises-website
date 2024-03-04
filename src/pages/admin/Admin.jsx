/** @format */

import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashBoard from "./AdminDashBoard";

const Admin = () => {
  let [login, setLogin] = useState(false);

  return (
    <div>
      {!login && <AdminLogin setLogin={setLogin} />}
      {login && <AdminDashBoard />}
    </div>
  );
};

export default Admin;