import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

//Creating Auth Context
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState([]);

  //Observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);
  //Google Auth
  const googleAuth = new GoogleAuthProvider();
  const googleUser = () => {
    signInWithPopup(auth, googleAuth);
  };

  //Twitter Auth
  const twitterAuth = new TwitterAuthProvider();
  const twitterUser = () => {
    signInWithPopup(auth, twitterAuth);
  };

  //Github Auth
  const githubAuth = new GithubAuthProvider();
  const githubUser = () => {
    signInWithPopup(auth, githubAuth);
  };

  //Sign Out
  const logOut = () => {
    signOut(auth)
      .then()
      .catch((err) => console.log("Logout Failed", err));
  };

  const AuthInfo = { user, googleUser, twitterUser, githubUser, logOut };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProviders;
