import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import logowhite from './Assets/logowhite.png';  
import './Styles/Navbar.css';  

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(newOpen);
  };

  const DrawerList = () => (
    <Box
      className="custom-drawer"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
            },
          }}>
            <ListItemText 
              primary="Úvod" 
              sx={{ 
     
                fontWeight: 200, 
                fontSize: '1.5rem', 
                color: 'white' ,
                transform: 'translateZ(0)', // Forces rendering
                fontFamily: '"Titillium Web", "Courier New", sans-serif',
              }} 
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/projekty" sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
            },
          }}>
            <ListItemText 
              primary="Projekty" 
              sx={{ 
                fontFamily: '"Titillium Web", sans-serif', 
                fontWeight: 200, 
                fontSize: '1.5rem', 
                color: 'white' 
              }} 
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/onas" sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
            },
          }}>
            <ListItemText 
              primary="O Nás" 
              sx={{ 
                fontFamily: '"Titillium Web", sans-serif', 
                fontWeight: 200, 
                fontSize: '1.5rem', 
                color: 'white' 
              }} 
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/kontakt" sx={{
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
            },
          }}>
            <ListItemText 
              primary="Kontakt" 
              sx={{ 
                fontFamily: '"Titillium Web", sans-serif', 
                fontWeight: 200, 
                fontSize: '1.5rem', 
                color: 'white' 
              }} 
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider className="drawer-divider" />
    </Box>
  );

  return (
    <div className="top-panel">
      <Link to="/">
        <img className="logo" src={logowhite} alt="Logo" />
      </Link>

      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          color: '#225045', 
          position: 'absolute',
          right: '20px',
        }}
        className="menu-icon"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList()}
      </Drawer>
    </div>
  );
};

export default Navbar;
