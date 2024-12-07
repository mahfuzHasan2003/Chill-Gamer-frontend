import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthDataProvider";
import axios from "axios";

const GameWatchList = () => {
   const { user } = useContext(AuthContext);
   const [myWatchList, setMyWatchList] = useState([]);
   useEffect(() => {
      axios
         .get(`https://chill-gamer-backend.vercel.app/watchList/${user.email}`)
         .then((data) => setMyWatchList(data.data));
   }, []);

   return (
      <div className='my-10'>
         <h2 className='font-semibold text-4xl'>Game WatchList!!</h2>
         <div className='mt-10'>
            {myWatchList.length > 0 ? (
               <table className='table'>
                  <thead>
                     <tr>
                        <th>Game Name</th>
                        <th>Genre</th>
                        <th>Rating</th>
                     </tr>
                  </thead>
                  <tbody>
                     {myWatchList.map((singleWatchList) => {
                        return (
                           <tr className='hover'>
                              <td>{singleWatchList.gameName}</td>
                              <td> {singleWatchList.gameType}</td>
                              <td> {singleWatchList.rating} out of 5</td>
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

export default GameWatchList;
