import { useContext } from "react";
import { AuthContext } from "../providers/AuthDataProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   if (loading) return <Loader />;
   return user ? children : <Navigate to='/auth/login' />;
};

export default PrivateRoute;
