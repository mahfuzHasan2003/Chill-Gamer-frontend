import axios from "axios";
import { useEffect, useState } from "react";
import SingleReviewCard from "./SingleReviewCard";

const TopRated = () => {
   const [topRatedReviews, setTopRatedReviews] = useState([]);
   useEffect(() => {
      axios
         .get("https://chill-gamer-backend.vercel.app/top-rated-ever")
         .then((response) => setTopRatedReviews(response.data))
         .catch((err) => console.error(err));
   }, []);

   return (
      <div className='my-20'>
         <h2 className='font-semibold text-4xl'>Top rated ever</h2>
         <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {topRatedReviews.map((review) => (
               <SingleReviewCard key={review._id} review={review} />
            ))}
         </div>
      </div>
   );
};

export default TopRated;
