import { Rating } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthDataProvider";

const ReviewDetails = () => {
   const { user } = useContext(AuthContext);
   const action = (snackbarId) => (
      <button
         className='text-2xl'
         onClick={() => {
            closeSnackbar(snackbarId);
         }}>
         ×
      </button>
   );
   const navigate = useNavigate();
   const { data: review } = useLoaderData();
   const {
      _id,
      thumbnailURL,
      gameName,
      publishingYear,
      gameType,
      rating,
      review: userReview,
      userProfile,
      userName,
      userEmail,
   } = review;

   const handleAddToWatchList = (e) => {
      const newWatchListData = {
         mail: user.email,
         gameName,
         rating,
         gameType,
      };
      fetch("https://chill-gamer-backend.vercel.app/watchList/", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(newWatchListData),
      })
         .then(() => {
            enqueueSnackbar("Successfully Added to Watch List.", {
               variant: "success",
               action,
               anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "right",
               },
            });
            navigate("/my-watchList");
         })
         .catch((err) => console.error(err));
   };

   return (
      <div className='my-10'>
         <h2 className='font-semibold text-4xl'>Review Details</h2>
         <div className='inline-flex gap-3 items-center mt-10'>
            <img
               src={userProfile}
               alt={userName}
               className='w-10 md:w-14 aspect-square rounded-full border-2 border-primary'
            />
            <div>
               <h5 className='text-xl font-semibold'>{userName}</h5>
               <p className='text-xs text-gray-300'>{userEmail}</p>
            </div>
         </div>
         <div className='my-5 space-y-3'>
            <img
               src={thumbnailURL}
               alt={gameName}
               className='w-full max-w-xl'
            />
            <h3 className='text-xl md:text-3xl font-bold'>
               <span>Game Name: </span>
               {gameName}
            </h3>
            <div className='flex flex-wrap gap-x-5 gap-y-3 items-center'>
               <p className='text-sm md:text-base'>
                  <span className='font-semibold'>Publishing year: </span>
                  <span className='text-gray-300'>{publishingYear}</span>
               </p>
               <p className='text-sm md:text-base'>
                  <span className='font-semibold'>Genre: </span>
                  <span className='text-gray-300'>{gameType}</span>
               </p>
               <div>
                  <a
                     id={`rating-${_id}`}
                     className='cursor-pointer'
                     data-tooltip-delay-hide={500}
                     data-tooltip-place='right'>
                     <Rating
                        name='read-only'
                        value={rating}
                        readOnly
                        precision={0.5}
                     />
                  </a>
                  <Tooltip
                     anchorSelect={`#rating-${_id}`}
                     content={`${rating} out of 5`}
                  />
               </div>
            </div>
            <div>
               <p className='text-sm md:text-base font-semibold'>Review:</p>
               <p className='text-sm md:text-base'>{userReview}</p>
            </div>
            <button
               className='px-4 py-2 bg-primary text-neutral rounded-sm mt-3 focus:scale-95 font-semibold'
               onClick={handleAddToWatchList}>
               Add to WatchList
            </button>
         </div>
      </div>
   );
};

export default ReviewDetails;
