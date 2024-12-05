import { useState } from "react";
import SingleReviewCard from "../components/SingleReviewCard";
import { useLoaderData } from "react-router-dom";
import Loader from "../components/Loader";

const AllReviews = () => {
   const { data: allReviews } = useLoaderData();
   return (
      <div className='my-10'>
         <div className='md:flex justify-between items-center'>
            <h2 className='font-semibold text-4xl'>All Reviews!!</h2>
            <div className='text-right'>
               <select
                  name='filterBy'
                  className='bg-transparent *:text-primary border p-1 md:p-2 outline-none rounded-sm mt-3'>
                  <option value='filter-by' disabled selected>
                     Filter By..
                  </option>
                  <option value='rating'>Rating</option>
                  <option value='rating'>Publishing Year</option>
               </select>
            </div>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
            {allReviews.map((review) => (
               <SingleReviewCard review={review} key={review._id} />
            ))}
         </div>
      </div>
   );
};

export default AllReviews;
