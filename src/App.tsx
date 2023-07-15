import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Service from "./pages/Service";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/auth/SignUp";
import AuthDetails from "./pages/auth/AuthDetails";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <AuthDetails />
      <Footer />
    </div>
  );
};

export default App;
