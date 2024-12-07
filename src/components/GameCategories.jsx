import {
   SportsEsports,
   FlashOn,
   Explore,
   Business,
   Memory,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const GameCategories = () => {
   const navigate = useNavigate();
   return (
      <div className='my-20'>
         <h2 className='font-semibold text-4xl text-center'>Find Your Style</h2>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5 *:border *:rounded-md *:py-5 *:text-center'>
            <div
               className='hover:scale-95 hover:bg-base-100 cursor-pointer space-y-2'
               onClick={() => navigate("/all-reviews")}>
               <SportsEsports fontSize='large' />
               <p>Action</p>
            </div>
            <div
               className='hover:scale-95 hover:bg-base-100 cursor-pointer space-y-2'
               onClick={() => navigate("/all-reviews")}>
               <FlashOn fontSize='large' />
               <p>RPG</p>
            </div>
            <div
               className='hover:scale-95 hover:bg-base-100 cursor-pointer space-y-2'
               onClick={() => navigate("/all-reviews")}>
               <Explore fontSize='large' />
               <p>Adventure</p>
            </div>
            <div
               className='hover:scale-95 hover:bg-base-100 cursor-pointer space-y-2'
               onClick={() => navigate("/all-reviews")}>
               <Business fontSize='large' />
               <p>Strategy</p>
            </div>
            <div
               className='hover:scale-95 hover:bg-base-100 cursor-pointer space-y-2'
               onClick={() => navigate("/all-reviews")}>
               <Memory fontSize='large' />
               <p>Simulation</p>
            </div>
         </div>
      </div>
   );
};

export default GameCategories;
