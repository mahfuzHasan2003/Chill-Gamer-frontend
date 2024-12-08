import { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthDataProvider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdMenu } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ImCross } from "react-icons/im";
import "./Navbar.css";

const Navbar = () => {
   const navigate = useNavigate();
   const buttonRef = useRef(null);
   const { user, logOut } = useContext(AuthContext);
   const [anchorEl, setAnchorEl] = useState(null);
   const openProfile = Boolean(anchorEl);
   const [isDraweOpen, setIsDraweOpen] = useState(false);
   const [theme, setTheme] = useState(
      JSON.parse(localStorage.getItem("theme")) || "halloween"
   );
   useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
      document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);
   const handleChangeTheme = (e) => {
      const selectedTheme = e.target.checked ? "halloween" : "corporate";
      setTheme(selectedTheme);
   };

   return (
      <nav className='py-4 flex justify-between items-center'>
         <div className='inline-flex items-center gap-1'>
            <button
               className='lg:hidden cursor-pointer'
               onClick={() => setIsDraweOpen((prevState) => !prevState)}>
               <MdMenu size={30} />
            </button>
            <Drawer
               open={isDraweOpen}
               onClose={() => setIsDraweOpen((prevState) => !prevState)}
               direction='left'
               lockBackgroundScroll='true'
               size='200px'
               className='p-5'>
               <div className='text-gray-800'>
                  <button
                     className='flex justify-end w-full'
                     onClick={() => setIsDraweOpen((prevState) => !prevState)}>
                     <ImCross size={25} />
                  </button>
                  <div className='mt-10 flex flex-col gap-3 *:px-2'>
                     {!user && (
                        <div className='flex md:hidden flex-col gap-2'>
                           <Link to='/auth/register'>
                              <button
                                 className='border-2 border-primary bg-primary py-1 rounded-sm w-full'
                                 onClick={() =>
                                    setIsDraweOpen((prevState) => !prevState)
                                 }>
                                 Register
                              </button>
                           </Link>
                           <Link to='/auth/login'>
                              <button
                                 className='border-2 border-primary text-primary w-full py-1 rounded-sm'
                                 onClick={() =>
                                    setIsDraweOpen((prevState) => !prevState)
                                 }>
                                 LogIn
                              </button>
                           </Link>
                        </div>
                     )}
                     <NavLink
                        to='/'
                        onClick={() =>
                           setIsDraweOpen((prevState) => !prevState)
                        }>
                        Home
                     </NavLink>
                     <NavLink
                        to='/all-reviews'
                        onClick={() =>
                           setIsDraweOpen((prevState) => !prevState)
                        }>
                        All Reviews
                     </NavLink>
                     <NavLink
                        to='/add-review'
                        onClick={() =>
                           setIsDraweOpen((prevState) => !prevState)
                        }>
                        Add Review
                     </NavLink>
                     {user && (
                        <NavLink
                           to='/my-reviews'
                           onClick={() =>
                              setIsDraweOpen((prevState) => !prevState)
                           }>
                           My Reviews
                        </NavLink>
                     )}
                     {user && (
                        <NavLink
                           to='/my-watchList'
                           onClick={() =>
                              setIsDraweOpen((prevState) => !prevState)
                           }>
                           Game WatchList
                        </NavLink>
                     )}
                  </div>
               </div>
            </Drawer>
            <span
               className='font-bold text-2xl md:text-3xl cursor-pointer'
               onClick={() => navigate("/")}>
               <span className='text-primary'>Chill</span>Gamer
            </span>
         </div>

         <div className='hidden lg:inline-flex gap-3 *:px-2'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/all-reviews'>All Reviews</NavLink>
            <NavLink to='/add-review'>Add Review</NavLink>
            {user && <NavLink to='/my-reviews'>My Reviews</NavLink>}
            {user && <NavLink to='/my-watchList'>Game WatchList</NavLink>}
         </div>

         <div className='flex items-center gap-3'>
            <label className='swap swap-rotate'>
               <input
                  type='checkbox'
                  onChange={handleChangeTheme}
                  checked={theme === "halloween"}
                  className='theme-controller'
                  value='synthwave'
               />
               <svg
                  className='swap-off h-8 w-8 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'>
                  <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
               </svg>

               <svg
                  className='swap-on h-8 w-8 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'>
                  <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
               </svg>
            </label>
            {user ? (
               <div>
                  <Tooltip title={`Profile | ${user?.displayName}`}>
                     <IconButton
                        ref={buttonRef}
                        onClick={() => setAnchorEl(buttonRef.current)}
                        size='small'
                        aria-controls={openProfile ? "account-menu" : undefined}
                        aria-haspopup='true'
                        aria-expanded={openProfile ? "true" : undefined}>
                        <Avatar
                           sx={{ maxWidth: 50, maxHeight: 50 }}
                           src={user?.photoURL}>
                           {user?.displayName?.slice(0, 1)}
                        </Avatar>
                     </IconButton>
                  </Tooltip>
                  <Menu
                     anchorEl={anchorEl}
                     id='account-menu'
                     open={openProfile}
                     onClose={() => setAnchorEl(null)}
                     onClick={() => setAnchorEl(null)}
                     slotProps={{
                        paper: {
                           elevation: 0,
                           sx: {
                              overflow: "visible",
                              filter:
                                 "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                              mt: 2,
                              "&::before": {
                                 content: '""',
                                 display: "block",
                                 position: "absolute",
                                 top: 0,
                                 right: 14,
                                 width: 10,
                                 height: 10,
                                 bgcolor: "background.paper",
                                 transform: "translateY(-50%) rotate(45deg)",
                                 zIndex: 0,
                              },
                           },
                        },
                     }}
                     transformOrigin={{ horizontal: "right", vertical: "top" }}
                     anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                     <MenuItem
                        sx={{
                           fontSize: "1.25rem",
                           fontWeight: "600",
                           "&:hover": {
                              backgroundColor: "transparent",
                              color: "inherit",
                           },
                        }}>
                        {user?.displayName}
                     </MenuItem>
                     <MenuItem
                        onClick={() => {
                           setAnchorEl(null);
                           logOut()
                              .then(() => navigate("/"))
                              .catch((err) => console.error(err));
                        }}>
                        LogOut
                     </MenuItem>
                     <MenuItem onClick={() => setAnchorEl(null)}>
                        My account
                     </MenuItem>
                  </Menu>
               </div>
            ) : (
               <div className='hidden md:inline-flex gap-2'>
                  <Link to='/auth/register'>
                     <button className='bg-primary border-2 border-primary text-neutral px-4 py-1 rounded-sm'>
                        Register
                     </button>
                  </Link>
                  <Link to='/auth/login'>
                     <button className='border-2 border-primary px-4 py-1 rounded-sm text-primary'>
                        LogIn
                     </button>
                  </Link>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
