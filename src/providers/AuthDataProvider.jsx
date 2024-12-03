import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
   updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthDataProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
   const registerWithEmail = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const updateUserProfile = (obj) => {
      updateProfile(auth.currentUser, obj);
   };
   const logInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };
   const logInWithEmail = () => {
      setLoading(true);
      //   signInWithPopup(auth, googleProvider);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
      });
      return () => unSubscribe();
   }, []);

   const authData = {
      user,
      logInWithGoogle,
      registerWithEmail,
      updateUserProfile,
      setError,
      error,
   };
   return (
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
   );
};

export default AuthDataProvider;
