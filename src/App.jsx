import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* home page */}
        <Route path={"/"} element={<HomePage />} />

        {/* about page */}
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
