import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthDataProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
   const { user } = useContext(AuthContext);
   const [myReviews, setMyReviews] = useState([]);
   useEffect(() => {
      axios
         .get(
            `https://chill-gamer-backend.vercel.app/my-reviews/user/${user.email}`
         )
         .then((data) => setMyReviews(data.data));
   }, [user.email, myReviews]);
   const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
         confirmButton: "btn btn-success",
         cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
   });

   return (
      <div className='my-10'>
         <h2 className='font-semibold text-4xl'>All of your reviews here!!</h2>
         <div className='mt-10'>
            {myReviews.length > 0 ? (
               <table className='table'>
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
                              <td className='inline-flex gap-3 items-center flex-wrap'>
                                 <Link
                                    to={`/update-review/${singleReview._id}`}>
                                    <button>
                                       <FaEdit size={20} />
                                    </button>
                                 </Link>
                                 <button
                                    onClick={() =>
                                       swalWithBootstrapButtons
                                          .fire({
                                             title: "Are you sure?",
                                             text: "You won't be able to revert this!",
                                             icon: "warning",
                                             showCancelButton: true,
                                             confirmButtonText:
                                                "Yes, delete it!",
                                             cancelButtonText: "No, cancel!",
                                             reverseButtons: false,
                                          })
                                          .then((result) => {
                                             if (result.isConfirmed) {
                                                fetch(
                                                   `https://chill-gamer-backend.vercel.app/review/${singleReview._id}`,
                                                   {
                                                      method: "DELETE",
                                                   }
                                                )
                                                   .then(() => {
                                                      swalWithBootstrapButtons.fire(
                                                         {
                                                            title: "Deleted!",
                                                            text: "Your review has been deleted.",
                                                            icon: "success",
                                                         }
                                                      );
                                                   })
                                                   .catch((err) =>
                                                      console.error(err)
                                                   );
                                             } else if (
                                                result.dismiss ===
                                                Swal.DismissReason.cancel
                                             ) {
                                                swalWithBootstrapButtons.fire({
                                                   title: "Cancelled",
                                                   text: "Deletion cancelled",
                                                   icon: "error",
                                                });
                                             }
                                          })
                                    }>
                                    <FaTrash size={20} />
                                 </button>
                              </td>
                           </tr>
                        );
                     })}
                  </tbody>
               </table>
            ) : (
               <div>No Data Available</div>
            )}
         </div>
      </div>
   );
};

export default MyReviews;
