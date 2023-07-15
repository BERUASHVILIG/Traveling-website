// import React from "react";
// import Hero from "../../components/Hero";
// import SignImg from "../../assets/12.jpg";

// const SignUp = () => {
//   return (
//     <div>
//       <Hero cName="hero-mid" heroImg={SignImg} title="SignUp" />
//       <div className="hero-mid">
//         <div className="form-container">
//           <form>
//             <input type="text" placeholder="Email" />
//             <input type="text" placeholder="Password" />
//             <button>Sign Up</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { auth } from "../../firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Hero from "../../components/Hero";

import SignImg from "../../assets/12.jpg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Hero cName="hero-mid" heroImg={SignImg} title="SignUp" />
      <div className="hero-mid">
        <h1>Sign Up</h1>
        <p>Create Account</p>
        <form onSubmit={signUp}>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;