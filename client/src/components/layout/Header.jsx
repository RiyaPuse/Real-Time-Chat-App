import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip } from '@mui/material';

import { orange } from '../../constens/color.js';
import React, { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationIcon } from '@mui/icons-material'
// import Search from '../specific/Search.jsx';
const Search = React.lazy(() => import('../specific/Search.jsx'));
const NewGroups = React.lazy(() => import('../specific/NewGroups.jsx'));
const Notifications = React.lazy(() => import('../specific/Notifications.jsx'));
function Header() {

  // navigat hook
  const navigate = useNavigate();

  // temporary data after sometime it will replace with redux
  const [ismobile, setIsMobile] = useState(false);
  const [issearch, setIsSearch] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isnotification, setIsNotification] = useState(false);
  

  // to handle mobile responsiveness
  const handlMobile = () => {
    setIsMobile((prev) => !prev);
  }

  // function to open search bar
  const openSearchDialog = () => {
    setIsSearch((prev) => !prev);
  }
  // open new group 
  const openNewGroup = () => {
    setIsGroup((prev) => !prev);
  }
const openNotification = () => {
  setIsNotification((prev) => !prev);
}

  // directly navigat to group page
  const navigateToGroup = () => navigate("/groups");

  // directly navigat to login page
  const logoutHandler = () => {
    navigate("logout");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position='static' sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography varient="h6" sx={{

              display: { xs: 'none', sm: 'block' },
            }}>
              Chat App
            </Typography>
            {/* for mobile responsiveness */}

            <Box sx={{
              display: { xs: 'block', sm: 'none' },
            }} >
              <IconButton color='inherit' onClick={handlMobile}>
                <MenuIcon />
              </IconButton>
            </Box>


            {/* box  */}
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <Tooltip title="Search">
                <IconButton color='inherit' size='large' onClick={openSearchDialog}>
                  <SearchIcon />
                </IconButton>
              </Tooltip>

              {/* icon add to open new group */}
              <Tooltip title="New Group">
                <IconButton color='inherit' size='large' onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>
              {/* manage notification */}
              <Tooltip title="Notification">
                <IconButton color='inherit' size='large' onClick={openNotification}>
                  <NotificationIcon />
                </IconButton>
              </Tooltip>
              
              {/* manage groups */}
               <Tooltip title="Manage Groups">
                <IconButton color='inherit' size='large' onClick={navigateToGroup}>
                  <GroupIcon />
                </IconButton>

              </Tooltip>

              {/* logout */}
              <Tooltip title="Logout">
                <IconButton color='inherit' size='large' onClick={logoutHandler}>
                  <LogoutIcon />
                </IconButton>

              </Tooltip>

            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {
        issearch &&(
          <Suspense fallback={<div>Loading...</div>}>
            <Search />  
          </Suspense>
        )
      }
      {/* new group if exist */}

      {
        isGroup &&(
          <Suspense fallback={<div>Loading...</div>}>
            <NewGroups />  
          </Suspense>
        )
      }
      {/* manage notification if exist */}

      {
        isnotification &&(
          <Suspense fallback={<div>Loading...</div>}>
            <Notifications />  
          </Suspense>
        ) 
      }

    </>
  )
}

export default Header
