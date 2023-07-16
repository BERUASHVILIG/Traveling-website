import React, { useState } from "react";
import { auth } from "../../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Hero from "../../components/Hero";
import SignImg from "../../assets/12.jpg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setEmail("");
        setPassword("");
        alert(userCredential);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="signIn-container">
      <Hero cName="hero-mid" heroImg={SignImg} title="SignIn" />
      <h1>Sign In</h1>
      <div className="hero-mid">
        <div className="form-container">
          <form onSubmit={signIn}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
