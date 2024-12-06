import { Divider, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const SingleReviewCard = ({ review }) => {
   const {
      _id,
      thumbnailURL,
      gameName,
      rating,
      review: userReview,
      userProfile,
      userName,
      userEmail,
   } = review;

   return (
      <div className='border p-5 rounded-md'>
         <div className='inline-flex gap-3 items-center'>
            <img
               src={userProfile}
               className='w-10 md:w-14 aspect-square rounded-full border-2 border-secondary'
            />
            <div>
               <h5 className='text-xl font-semibold'>{userName}</h5>
               <p className='text-xs text-gray-300'>{userEmail}</p>
            </div>
         </div>
         <Divider sx={{ borderColor: "#94a3b8", my: 2 }} />
         <div className='flex gap-3 md:gap-5'>
            <div className='w-56'>
               <img
                  src={thumbnailURL}
                  alt={gameName}
                  className='rounded-md aspect-square'
               />
            </div>
            <div>
               <h6 className='text-lg font-semibold mb-2'>{gameName}</h6>
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
               <p>{userReview.slice(0, 100)}....</p>
               <Link to={`/review/${_id}`}>
                  <button className='px-4 py-2 bg-neutral text-primary rounded-sm mt-3 focus:scale-95'>
                     Explore Details
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SingleReviewCard;
