import React from "react";
import "./ContactStyles.css";
import Hero from "../../components/Hero";
import contactImg from "../../assets/2.jpg";

const Contact = () => {
  return (
    <div>
      <Hero cName="hero-mid" heroImg={contactImg} title="Contact" />
      <div className="form-container">
        <h1>Send a Message to us!</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
