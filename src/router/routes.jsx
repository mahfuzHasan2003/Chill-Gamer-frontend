import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AllReviews from "../pages/AllReviews";
import MainLayout from "../layouts/MainLayout";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import GameWatchList from "../pages/GameWatchList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../private/PrivateRoute";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/all-reviews",
            element: <AllReviews />,
         },
         {
            path: "/add-review",
            element: (
               <PrivateRoute>
                  <AddReview />
               </PrivateRoute>
            ),
         },
         {
            path: "/my-reviews",
            element: (
               <PrivateRoute>
                  <MyReviews />
               </PrivateRoute>
            ),
         },
         {
            path: "/game-watchList",
            element: (
               <PrivateRoute>
                  <GameWatchList />
               </PrivateRoute>
            ),
         },
         {
            path: "/auth/register",
            element: <Register />,
         },
         {
            path: "/auth/login",
            element: <Login />,
         },
      ],
   },
]);

export default routes;
