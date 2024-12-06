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
import ReviewDetails from "../pages/ReviewDetails";
import axios from "axios";
import UpdateReview from "../pages/UpdateReview";
import ErrorPage from "../pages/ErrorPage";

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
            loader: () =>
               axios.get("https://chill-gamer-backend.vercel.app/reviews"),
         },
         {
            path: "/review/:id",
            element: (
               <PrivateRoute>
                  <ReviewDetails />
               </PrivateRoute>
            ),
            loader: ({ params }) =>
               axios.get(
                  `https://chill-gamer-backend.vercel.app/review/${params.id}`
               ),
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
            path: "/update-review/:id",
            element: (
               <PrivateRoute>
                  <UpdateReview />
               </PrivateRoute>
            ),
            loader: ({ params }) =>
               axios.get(
                  `https://chill-gamer-backend.vercel.app/review/${params.id}`
               ),
         },
         {
            path: "/my-watchList",
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
   {
      path: "*",
      element: <ErrorPage />,
   },
]);

export default routes;
