import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SnackbarProvider } from "notistack";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthDataProvider";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const MainLayout = () => {
   const { loading } = useContext(AuthContext);
   return (
      <div className='w-11/12 max-w-8xl mx-auto min-h-svh flex flex-col'>
         <SnackbarProvider />
         <Navbar />
         <div className='flex-grow'>{loading ? <Loader /> : <Outlet />}</div>
         <Footer />
      </div>
   );
};

export default MainLayout;
