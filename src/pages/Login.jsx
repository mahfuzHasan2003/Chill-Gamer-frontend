import { Divider } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthDataProvider";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { closeSnackbar, enqueueSnackbar } from "notistack";

const Login = () => {
   const navigate = useNavigate();
   const [showPass, setShowPass] = useState(false);
   const {
      logInWithGoogle,
      error,
      setError,
      isValidEmail,
      isValidPassword,
      logInWithEmail,
   } = useContext(AuthContext);
   const action = (snackbarId) => (
      <button
         className='text-2xl'
         onClick={() => {
            closeSnackbar(snackbarId);
         }}>
         ×
      </button>
   );
   const handleLogin = (e) => {
      e.preventDefault();
      setError("");
      const email = e.target.email.value;
      const password = e.target.password.value;
      if (!isValidEmail(email)) {
         setError("Email or password is incorrect");
         return;
      }
      if (!isValidPassword(password)) {
         setError("Email or password is incorrect");
         return;
      }

      logInWithEmail(email, password)
         .then(() =>
            enqueueSnackbar("Successfully logged in.", {
               variant: "success",
               action,
               anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "right",
               },
            })
         )
         .then(() => navigate("/"))
         .catch((err) => {
            setError(err.code);
         });
   };
   return (
      <div className='my-20'>
         <h2 className='font-semibold text-4xl'>Login Here!!</h2>
         <div
            onClick={() => {
               logInWithGoogle()
                  .then(() => navigate("/"))
                  .catch((err) => setError(err.code));
            }}
            className='inline-flex bg-white text-primary border-2 border-primary cursor-pointer rounded-sm p-2 gap-3 items-center mt-10 justify-center px-10
         '>
            <img
               src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII='
               alt='Google icon'
               className='w-10'
            />
            <span className='text-xl font-semibold'>Continue with Google</span>
         </div>
         <Divider
            textAlign='left'
            sx={{ "&::before, &::after": { borderColor: "gray" }, mt: 3 }}>
            OR
         </Divider>
         <form
            className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'
            onSubmit={handleLogin}>
            <div className='flex flex-col gap-1'>
               <label htmlFor='email'>
                  Email<span className='text-red-500'>*</span>
               </label>
               <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='example@example.com'
                  className='bg-transparent p-2 border rounded-sm'
               />
            </div>
            <div className='flex flex-col gap-1'>
               <label htmlFor='password'>
                  Password<span className='text-red-500'>*</span>
               </label>
               <div className='relative'>
                  <input
                     type={showPass ? "text" : "password"}
                     id='password'
                     name='password'
                     placeholder='password'
                     className='bg-transparent p-2 border rounded-sm relative w-full'
                  />
                  {showPass ? (
                     <IoMdEye
                        className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
                        onClick={() => setShowPass((prev) => !prev)}
                     />
                  ) : (
                     <IoMdEyeOff
                        className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
                        onClick={() => setShowPass((prev) => !prev)}
                     />
                  )}
               </div>
            </div>
            {error && (
               <p className='text-sm text-red-500 md:col-span-2'>{error}</p>
            )}
            <div className='md:col-span-2 md:flex justify-between items-center'>
               <input
                  type='submit'
                  id='submit'
                  name='submit'
                  value='Login'
                  className='bg-primary py-2 rounded-sm text-neutral font-bold text-lg min-w-40 focus:scale-95 cursor-pointer'
               />
               <div>
                  <p className='flex gap-1 mt-5 md:mt-0'>
                     Don't have an account?
                     <Link
                        className='text-blue-500 underline font-semibold'
                        to='/auth/register'>
                        Register
                     </Link>
                  </p>
                  <p className='flex gap-1'>
                     Forgot password?
                     <Link
                        className='text-blue-500 underline font-semibold'
                        to='/'>
                        reset now
                     </Link>
                  </p>
               </div>
            </div>
         </form>
      </div>
   );
};

export default Login;
