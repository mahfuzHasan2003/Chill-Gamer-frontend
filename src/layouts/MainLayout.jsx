import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import { SnackbarProvider } from "notistack";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthDataProvider";
import Loader from "../components/Loader";

const MainLayout = () => {
   const { loading } = useContext(AuthContext);
   return (
      <div className='w-11/12 max-w-8xl mx-auto'>
         <SnackbarProvider />
         <Navbar />
         {loading ? <Loader /> : <Outlet />}
      </div>
   );
};

export default MainLayout;
