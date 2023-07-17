import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Hero from "../../components/Hero";
import SignImg from "../../assets/12.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState<any>();

  const signUpWithEmailPassword = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        setEmail("");
        setPassword("");
        alert("Successfully signed up with email and password!");
        alert(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        console.log(result.user.email);
        alert("Successfully signed up with Google!");
        setUser(result.user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="hero-mid" data-aos="zoom-in-left">
        <div className="form-container">
          <h1>Sign Up</h1>
          <p>Create Account</p>
          <form onSubmit={signUpWithEmailPassword}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up with Email and Password</button>
          </form>
          <button onClick={signUpWithGoogle}>Sign Up with Google</button>
          <Link to={"/signin"}>SignIn</Link>
        </div>
        <div>{user}</div>
      </div>
    </div>
  );
};

export default SignUp;
