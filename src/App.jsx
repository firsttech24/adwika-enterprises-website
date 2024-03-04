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

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* home page */}
        <Route path={"/"} element={<HomePage />} />

        {/* about page */}
        <Route path={"/about"} element={<AboutPage />} />

        {/* services */}
        <Route path={"/services"} element={<ServicesPage />} />

        {/* projects */}
        <Route path={"/projects"} element={<ProjectsPage />} />

        {/* testimonials */}
        <Route path={"/testimonials"} element={<TestimonialsPage />} />

        {/* contact */}
        <Route path={"/contact"} element={<ContactPage />} />

        <Route path={"/admin"} element={<Admin/>} />

      </Routes>

      {/* footer */}
      <Footer />
    </BrowserRouter>
  );
}
