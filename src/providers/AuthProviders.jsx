import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  // TwitterAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

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

  //Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Update User Profile
  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, {
      displayName: name || user?.displayName,
      photoURL: url || user?.photoURL,
    });
  };

  //Log In User
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google Auth
  const googleAuth = new GoogleAuthProvider();
  const googleUser = () => {
    signInWithPopup(auth, googleAuth)
      .then(() => {
        toast.success("Successfully Login.");
      })
      .catch(() => {
        toast.error("Failed To Login.");
      });
  };

  // //Twitter Auth
  // const twitterAuth = new TwitterAuthProvider();
  // const twitterUser = () => {
  //   signInWithPopup(auth, twitterAuth)
  //     .then(() => {
  //       toast.success("Successfully Login.");
  //     })
  //     .catch(() => {
  //       toast.error("Failed To Login.");
  //     });
  // };

  //Facebook Auth
  const facebookAuth = new FacebookAuthProvider();
  const facebookUser = () => {
    signInWithPopup(auth, facebookAuth)
      .then(() => {
        toast.success("Successfully Login.");
      })
      .catch(() => {
        toast.error("Failed To Login.");
      });
  };

  //Github Auth
  const githubAuth = new GithubAuthProvider();
  const githubUser = () => {
    signInWithPopup(auth, githubAuth)
      .then(() => {
        toast.success("Successfully Login.");
      })
      .catch(() => {
        toast.error("Failed To Login.");
      });
  };

  //Sign Out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Successfully Logout.");
      })
      .catch(() => {
        toast.error("Failed, Try Again.");
      });
  };

  const AuthInfo = {
    user,
    googleUser,
    facebookUser,
    githubUser,
    logOut,
    createUser,
    updateUserProfile,
    setUser,
    logInUser,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProviders;
