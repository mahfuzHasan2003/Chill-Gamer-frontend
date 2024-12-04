import { useContext, useState, useRef } from "react";
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
   const { user } = useContext(AuthContext);
   const [anchorEl, setAnchorEl] = useState(null);
   const openProfile = Boolean(anchorEl);
   const [isDraweOpen, setIsDraweOpen] = useState(false);
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
                     <NavLink to='/'>Home</NavLink>
                     <NavLink to='/all-reviews'>All Reviews</NavLink>
                     {user && <NavLink to='/add-review'>Add Review</NavLink>}
                     {user && <NavLink to='/my-reviews'>My Reviews</NavLink>}
                     {user && (
                        <NavLink to='/game-watchList'>Game WatchList</NavLink>
                     )}
                  </div>
               </div>
            </Drawer>
            <span
               className='font-bold text-3xl cursor-pointer'
               onClick={() => navigate("/")}>
               <span className='text-green-400'>Chill</span>Gamer
            </span>
         </div>

         <div className='hidden lg:inline-flex gap-3 *:px-2'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/all-reviews'>All Reviews</NavLink>
            {user && <NavLink to='/add-review'>Add Review</NavLink>}
            {user && <NavLink to='/my-reviews'>My Reviews</NavLink>}
            {user && <NavLink to='/game-watchList'>Game WatchList</NavLink>}
         </div>
         {user ? (
            <div>
               <Tooltip title={`Profile | ${user?.displayName}`}>
                  <IconButton
                     ref={buttonRef}
                     onClick={() => setAnchorEl(buttonRef.current)}
                     size='small'
                     sx={{ ml: 2 }}
                     aria-controls={openProfile ? "account-menu" : undefined}
                     aria-haspopup='true'
                     aria-expanded={openProfile ? "true" : undefined}>
                     <Avatar
                        sx={{ width: 50, height: 50 }}
                        src={user?.photoURL}>
                        {user?.displayName.slice(0, 1)}
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
                           filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
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
                  <MenuItem onClick={() => setAnchorEl(null)}>LogOut</MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>
                     My account
                  </MenuItem>
               </Menu>
            </div>
         ) : (
            <div className='inline-flex gap-2'>
               <Link to='/auth/register'>
                  <button className='bg-gray-100 border border-gray-100 text-primary px-4 py-1 rounded-sm hover:bg-gray-300'>
                     Register
                  </button>
               </Link>
               <Link to='/auth/login' className='hidden md:inline-block'>
                  <button className='border border-gray-100 hover:border-gray-400 px-4 py-1 rounded-sm'>
                     LogIn
                  </button>
               </Link>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
