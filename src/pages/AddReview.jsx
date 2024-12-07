import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthDataProvider";
import { Rating } from "@mui/material";
import Swal from "sweetalert2";

const AddReview = () => {
   const { user } = useContext(AuthContext);
   const [error, setError] = useState("");
   const [rating, setRating] = useState(2.5);
   const handleRatingChange = (e, newRating) => setRating(newRating);
   const handleAddReview = (e) => {
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
      const newReview = {
         userName: user.displayName,
         userEmail: user.email,
         userProfile: user.photoURL,
         thumbnailURL,
         gameName,
         gameType,
         publishingYear,
         rating,
         review,
      };
      fetch("https://chill-gamer-backend.vercel.app/reviews", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(newReview),
      })
         .then(() => {
            Swal.fire({
               title: "Yay!",
               text: "Your Review Added Successfully",
               icon: "success",
            });
            e.target.reset();
         })
         .catch((err) => console.error(err));
   };
   return (
      <div className='my-10'>
         <h2 className='font-semibold text-4xl'>Add Review!!</h2>
         <form
            className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'
            onSubmit={handleAddReview}>
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
                  value='Add Review'
                  className='rounded-sm px-10 py-3 bg-primary text-neutral font-semibold text-lg mt-5 focus:scale-95 cursor-pointer'
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

export default AddReview;
