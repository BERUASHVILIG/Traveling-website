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
import SignIn from "./pages/auth/SignIn";
import AuthDetails from "./pages/auth/AuthDetails";
import ScrollToTop from "./components/Sub-components/ScrollToTop";
import PreLoader from "./components/Sub-components/PreLoader";

const App = () => {
  return (
    <>
      <PreLoader />
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>{" "}
        <Footer />
      </div>
    </>
  );
};

export default App;
