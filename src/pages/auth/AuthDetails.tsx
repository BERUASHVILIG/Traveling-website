import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUset] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUset(user);
      } else {
        setAuthUset(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out Succesfully");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  return (
    <div>
      {authUser ? (
        <>
          <p>signIn{`${authUser.email}`}</p>{" "}
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
};

export default AuthDetails;
