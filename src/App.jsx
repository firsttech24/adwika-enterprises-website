/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import {
  HomePage,
  AboutPage,
  ServicesPage,
  ProjectsPage,
  TestimonialsPage,
  ContactPage,
} from "./pages";
import Admin from "./pages/admin/Admin";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import AddProjectForm from "./pages/admin/AddProjectForm";
import ProjectCard_ad from "./pages/admin/ProjectCard_ad";
import ProjectCardEdit from "./pages/admin/ProjectCardEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path={"/projects"}
          element={<ProjectsPage />}
        />
        {/* home page */}
        {/* <Route
          path={"/"}
          element={<HomePage />}
        />

        <Route
          path={"/about"}
          element={<AboutPage />}
        />

        <Route
          path={"/services"}
          element={<ServicesPage />}
        />

        

        <Route
          path={"/testimonials"}
          element={<TestimonialsPage />}
        />

        <Route
          path={"/contact"}
          element={<ContactPage />}
        /> */}

        <Route
          path={"/admin"}
          element={<Admin />}>
          <Route
            path="login"
            element={<AdminLogin />}
          />
          <Route
            path="dashboard"
            element={<AdminDashBoard />}
          />
          <Route
            path="addproject"
            element={<AddProjectForm />}
          />
          <Route
            path="project"
            element={<ProjectCard_ad />}
          />
          <Route
            path="project/edit"
            element={<ProjectCardEdit />}
          />
        </Route>
      </Routes>

      {/* footer */}
      <Footer />
    </BrowserRouter>
  );
}
