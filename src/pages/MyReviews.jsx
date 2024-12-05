import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthDataProvider";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyReviews = () => {
   const { user } = useContext(AuthContext);
   const [myReviews, setMyReviews] = useState([]);
   useEffect(() => {
      axios
         .get(`http://localhost:3000/reviews/user/${user.email}`)
         .then((data) => setMyReviews(data.data));
   }, [user.email]);

   return (
      <div className='my-10'>
         <h2 className='font-semibold text-4xl'>All of your reviews here!!</h2>
         <table className='table mt-10'>
            <thead>
               <tr>
                  <th></th>
                  <th>Game Name</th>
                  <th>Review</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {myReviews.map((singleReview, idx) => {
                  return (
                     <tr className='hover'>
                        <th>{idx + 1}</th>
                        <td>{singleReview.gameName}</td>
                        <td>{singleReview.review.slice(0, 300)}....</td>
                        <td className='inline-flex gap-3 items-center'>
                           <button>
                              <FaEdit size={20} />
                           </button>
                           <button>
                              <FaTrash size={20} />
                           </button>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default MyReviews;
