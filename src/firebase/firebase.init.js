import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyD5-Z0IV2NH8eyrATxttW_VOjjRvhjTf0A",
   authDomain: "chill-gamer-15ff6.firebaseapp.com",
   projectId: "chill-gamer-15ff6",
   storageBucket: "chill-gamer-15ff6.firebasestorage.app",
   messagingSenderId: "102116949878",
   appId: "1:102116949878:web:c38676ad02cfcbae984457",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
