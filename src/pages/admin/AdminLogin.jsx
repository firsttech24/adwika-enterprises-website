/** @format */

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const AdminLogin = ({}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isError,setIsError]=useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.username, formData.password);
      console.log("Logged in:", userCredential.user);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Error logging in:", error);
      setIsError("Failed to log in. Please check your credentials.");
    }

    // if(formData.username == "bikash" && formData.password == "bikash@12"){
    //   window.localStorage.setItem("adwikaenterprisescom@23", formData);
    //   navigate("/admin/dashboard");
    // }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="60vh"
      width="100vw">
      <div>
        <h2>Admin Login</h2>
        {isError && <p>{isError}</p>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary">
            Submit
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default AdminLogin;
