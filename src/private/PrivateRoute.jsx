import { useContext } from "react";
import { AuthContext } from "../providers/AuthDataProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   if (loading) return <p>Loading...</p>;
   return user ? children : <Navigate to='/auth/login' />;
};

export default PrivateRoute;
