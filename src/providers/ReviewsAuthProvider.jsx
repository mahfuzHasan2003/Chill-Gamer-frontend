import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ReviewContext = createContext();

const ReviewsAuthProvider = ({ children }) => {
   const [allReviews, setAllReviews] = useState([]);
   useEffect(() => {
      axios
         .get("http://localhost:3000/reviews")
         .then((data) => setAllReviews(data.data));
   }, []);
   const reviewsData = {
      allReviews,
   };
   return (
      <ReviewContext.Provider value={reviewsData}>
         {children}
      </ReviewContext.Provider>
   );
};

export default ReviewsAuthProvider;
