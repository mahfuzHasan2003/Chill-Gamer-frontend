import { useEffect, useState } from "react";
import SingleReviewCard from "../components/SingleReviewCard";
import axios from "axios";
import Loader from "../components/Loader";

const AllReviews = () => {
   const [allReviews, setAllReviews] = useState([]);
   const [loadingAllReviews, setLoadingAllReviews] = useState(true);
   const [filterBy, setFilterBy] = useState("");
   const [sortWith, setSortWith] = useState("");
   useEffect(() => {
      axios
         .get(
            `https://chill-gamer-backend.vercel.app/reviews?filterBy=${filterBy}&sortBy=${sortWith}`
         )
         .then((data) => setAllReviews(data.data))
         .then(() => setLoadingAllReviews(false));
   }, [filterBy, sortWith]);
   const handleFiltering = (e) => setFilterBy(e.target.value);
   const handleSorting = (e) => setSortWith(e.target.value);

   if (loadingAllReviews) return <Loader />;
   return (
      <div className='my-10'>
         <div className='md:flex justify-between items-center'>
            <h2 className='font-semibold text-4xl'>All Reviews!!</h2>
            <div className='text-right space-x-2'>
               <select
                  name='filterBy'
                  className='bg-transparent *:text-gray-800 border p-1 md:p-2 outline-none rounded-sm mt-3'
                  onChange={handleFiltering}>
                  <option value='filterBy' disabled selected>
                     Filter by Genres..
                  </option>
                  <option value='action'>Action</option>
                  <option value='RPG'>RPG</option>
                  <option value='adventure'>Adventure</option>
                  <option value='strategy'>Strategy</option>
                  <option value='simulation'>Simulation</option>
               </select>
               <select
                  name='sortBy'
                  onChange={handleSorting}
                  className='bg-transparent *:text-gray-800 border p-1 md:p-2 outline-none rounded-sm mt-3'>
                  <option value='' disabled selected>
                     Sort by..
                  </option>
                  <option value='rating'>Rating</option>
                  <option value='year'>Publishing Year</option>
               </select>
            </div>
         </div>
         {allReviews.length > 0 ? (
            <div className='columns-1 md:columns-2 lg:columns-3 *:break-inside-avoid gap-5 space-y-4 mt-5'>
               {allReviews.map((review) => (
                  <SingleReviewCard review={review} key={review._id} />
               ))}
            </div>
         ) : (
            <h4 className='mt-5'> No data found</h4>
         )}
      </div>
   );
};

export default AllReviews;
