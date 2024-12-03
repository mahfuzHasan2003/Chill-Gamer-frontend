import { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthDataProvider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
   const navigate = useNavigate();
   const buttonRef = useRef(null);
   const { user } = useContext(AuthContext);
   const [anchorEl, setAnchorEl] = useState(null);
   const openProfile = Boolean(anchorEl);
   return (
      <nav className='py-4 flex justify-between items-center'>
         <span
            className='font-bold text-3xl cursor-pointer'
            onClick={() => navigate("/")}>
            <span className='text-yellow-300'>Chill</span>Gamer
         </span>
         <div className='inline-flex gap-4'>
            <Link to='/'>Home</Link>
            <Link to='/all-reviews'>All Reviews</Link>
            {user && <Link to='/add-review'>Add Review</Link>}
            {user && <Link to='/my-reviews'>My Reviews</Link>}
            {user && <Link to='/game-watchList'>Game WatchList</Link>}
         </div>
         {user ? (
            <div>
               <Tooltip title={`Profile | ${user?.displayName}`}>
                  <IconButton
                     ref={buttonRef}
                     onClick={(e) => setAnchorEl(buttonRef.current)}
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
                  <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
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
               <Link to='/auth/login'>
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
