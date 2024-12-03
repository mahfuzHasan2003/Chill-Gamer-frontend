import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthDataProvider";

const Navbar = () => {
   const navigate = useNavigate();
   const { user } = useContext(AuthContext);
   return (
      <nav className='py-4 flex justify-between'>
         <span
            className='font-bold text-3xl cursor-pointer'
            onClick={() => navigate("/")}>
            <span className='text-yellow-300'>Chill</span>Gamer
         </span>
         <div className='inline-flex gap-4'>
            <Link to='/'>Home</Link>
            <Link to='/all-reviews'>All Reviews</Link>
            <Link to='/add-review'>Add Review</Link>
            <Link to='/my-reviews'>My Reviews</Link>
            <Link to='/game-watchList'>Game WatchList</Link>
         </div>
         {user ? (
            `user: ${user?.displayName}`
         ) : (
            <div className='inline-flex gap-2'>
               <Link to='/auth/register'>
                  <button className='bg-gray-100 border border-gray-100 text-primary px-4 py-1 rounded-sm hover:bg-gray-300'>
                     Register
                  </button>
               </Link>
               <Link to='/auth/login'>
                  <button className='border border-gray-100 hover:border-gray-400 px-4 py-1 rounded-sm'>
                     LogIn
                  </button>
               </Link>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
