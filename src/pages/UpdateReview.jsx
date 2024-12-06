import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthDataProvider";
import { Rating, Tooltip } from "@mui/material";
import Swal from "sweetalert2";

const UpdateReview = () => {
   const { data: review } = useLoaderData();
   const { user } = useContext(AuthContext);
   const [error, setError] = useState("");

   const {
      _id,
      thumbnailURL,
      gameName,
      publishingYear,
      gameType,
      rating: userRating,
      review: userReview,
   } = review;
   const [rating, setRating] = useState(userRating);
   const handleRatingChange = (e, newRating) => setRating(newRating);
   const navigate = useNavigate();

   const handleUpdateReview = (e) => {
      e.preventDefault();
      setError("");
      const thumbnailURL = e.target.thumbnailURL.value;
      const gameName = e.target.gameName.value;
      const gameType = e.target.gameType.value;
      const publishingYear = e.target.publishingYear.value;
      const review = e.target.review.value;
      if (
         !thumbnailURL ||
         !gameName ||
         gameType === "Select One" ||
         !publishingYear ||
         !review
      ) {
         setError("Please fill out all the fields");
         return;
      }
      const updatedReview = {
         thumbnailURL,
         gameName,
         gameType,
         publishingYear,
         review: userReview,
         rating,
      };
      fetch(`http://localhost:3000/review/${_id}`, {
         method: "PATCH",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(updatedReview),
      })
         .then(() => {
            Swal.fire({
               title: "Yay!",
               text: "Your Review Updated Successfully",
               icon: "success",
            });
            e.target.reset();
            navigate("/my-reviews");
         })
         .catch((err) => console.error(err));
   };
   return (
      <div className='my-10'>
         <h2 className='font-semibold text-4xl'>Update your review!!</h2>
         <form
            className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'
            onSubmit={handleUpdateReview}>
            <div className='flex flex-col gap-1'>
               <label htmlFor='username'>User Name</label>
               <input
                  type='text'
                  id='username'
                  name='username'
                  value={user?.displayName}
                  disabled
                  className='bg-gray-600 p-2 border rounded-sm text-gray-400 border-gray-600'
               />
            </div>
            <div className='flex flex-col gap-1'>
               <label htmlFor='email'>Email</label>
               <input
                  type='email'
                  id='email;'
                  name='email'
                  value={user?.email}
                  disabled
                  className='bg-gray-600 p-2 border rounded-sm text-gray-400 border-gray-600'
               />
            </div>
            <div className='flex flex-col gap-1'>
               <label htmlFor='thumbnailURL'>
                  Game Thumbnail URL<span className='text-red-500'>*</span>
               </label>
               <input
                  type='text'
                  id='thumbnailURL'
                  name='thumbnailURL'
                  defaultValue={thumbnailURL}
                  placeholder='https://example.com/photo.jpg'
                  className='bg-transparent p-2 border rounded-sm'
               />
            </div>
            <div className='flex flex-col gap-1'>
               <label htmlFor='gameName'>
                  Game Name<span className='text-red-500'>*</span>
               </label>
               <input
                  type='text'
                  id='gameName'
                  name='gameName'
                  defaultValue={gameName}
                  placeholder='PUBG Mobile'
                  className='bg-transparent p-2 border rounded-sm'
               />
            </div>
            <div className='flex flex-col gap-1'>
               <label htmlFor='select'>
                  Genres <span className='text-red-500'>*</span>
               </label>
               <select
                  name='gameType'
                  id='gameType'
                  value={gameType}
                  className='bg-transparent p-2 border rounded-sm *:text-neutral'>
                  <option value='Select One' disabled selected>
                     Select One ..
                  </option>
                  <option value='Action'>Action</option>
                  <option value='RPG'>RPG</option>
                  <option value='Adventure'>Adventure</option>
                  <option value='Strategy'>Strategy</option>
                  <option value='Simulation'>Simulation</option>
               </select>
            </div>
            <div className='flex flex-col gap-1'>
               <label htmlFor='publishingYear'>
                  Publishing Year<span className='text-red-500'>*</span>
               </label>
               <input
                  type='number'
                  id='publishingYear'
                  name='publishingYear'
                  defaultValue={publishingYear}
                  placeholder='Publishing Year'
                  className='bg-transparent p-2 border rounded-sm'
               />
            </div>
            <div className='flex flex-col gap-1'>
               <label htmlFor='review'>
                  Review Description<span className='text-red-500'>*</span>
               </label>
               <textarea
                  name='review'
                  id='review'
                  defaultValue={userReview}
                  placeholder='Type your full review here ...'
                  rows={5}
                  className='bg-transparent p-2 border rounded-sm'></textarea>
            </div>
            <div>
               <div className='flex flex-col gap-2'>
                  <label htmlFor='rating'>
                     Rating<span className='text-red-500'>*</span>
                  </label>
                  <Rating
                     name='half-rating'
                     value={rating}
                     precision={0.5}
                     onChange={handleRatingChange}
                  />
               </div>
               <input
                  type='submit'
                  value='Update Review'
                  className='rounded-sm px-10 py-3 bg-primary text-neutral font-semibold text-lg mt-5 cursor-pointer'
               />
               {error && (
                  <p className='text-sm text-red-500 md:col-span-2 mt-5'>
                     {error}
                  </p>
               )}
            </div>
         </form>
      </div>
   );
};

export default UpdateReview;
