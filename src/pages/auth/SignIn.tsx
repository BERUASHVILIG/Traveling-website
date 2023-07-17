import React, { useState } from "react";
import { auth } from "../../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
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

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="hero-mid">
      <div className="form-container">
        <h1>Sign In</h1>
        <p>Visit Account</p>
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
          <button onClick={googleSignIn}>Sign in with google</button>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
