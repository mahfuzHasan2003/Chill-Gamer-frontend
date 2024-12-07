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
               className='w-10 md:w-14 aspect-square rounded-full border-2 border-primary'
            />
            <div>
               <h5 className='text-xl font-semibold'>{userName}</h5>
               <p className='text-xs'>{userEmail}</p>
            </div>
         </div>
         <Divider sx={{ borderColor: "gray", my: 2 }} />
         <div className='flex gap-3 md:gap-5'>
            <div className='flex-1'>
               <img
                  src={thumbnailURL}
                  alt={gameName}
                  className='rounded-md aspect-square object-cover'
               />
            </div>

            <div className='flex-[2]'>
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
               <p>
                  {userReview.length > 100
                     ? `${userReview.slice(0, 100)}....`
                     : userReview}
               </p>
               <Link to={`/review/${_id}`}>
                  <button className='px-4 py-2 bg-primary text-neutral rounded-sm mt-3 focus:scale-95'>
                     Explore Details
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SingleReviewCard;
