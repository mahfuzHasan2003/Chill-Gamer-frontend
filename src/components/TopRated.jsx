import axios from "axios";
import { useEffect, useState } from "react";
import SingleReviewCard from "./SingleReviewCard";
import Loader from "./Loader";

const TopRated = () => {
   const [topRatedReviews, setTopRatedReviews] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      axios
         .get("https://chill-gamer-backend.vercel.app/top-rated-ever")
         .then((response) => setTopRatedReviews(response.data))
         .then(() => setLoading(false))
         .catch((err) => console.error(err));
   }, []);

   if (loading) return <Loader />;
   return (
      <div className='my-20'>
         <h2 className='font-semibold text-4xl mb-10'>Top rated ever</h2>
         <div className='mt-5 columns-1 md:columns-2 lg:columns-3 *:break-inside-avoid gap-5 space-y-4'>
            {topRatedReviews.map((review) => (
               <SingleReviewCard key={review._id} review={review} />
            ))}
         </div>
      </div>
   );
};

export default TopRated;
