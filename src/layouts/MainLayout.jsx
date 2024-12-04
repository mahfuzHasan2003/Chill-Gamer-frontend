import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const MainLayout = () => {
   return (
      <div className='w-11/12 max-w-8xl mx-auto'>
         <Navbar />
         <Outlet />
      </div>
   );
};

export default MainLayout;