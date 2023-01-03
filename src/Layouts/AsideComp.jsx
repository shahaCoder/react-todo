import * as React from 'react';
import { useContext, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, Outlet } from 'react-router-dom';
import { MdDelete } from 'react-icons/md'
import { FaNotesMedical } from 'react-icons/fa'
import { ImExit } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AuthContext } from '../Context/Context';
import LogOutModal from '../components/LogOutModal';
import SearchComp from '../components/SearchComp';

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen2(false);
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { getdata } = useContext(AuthContext)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className="for-flex">
          <Typography variant="h6" noWrap component="div">
            Todocom
          </Typography>
          <SearchComp />  
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
          {/* <p className='getdata-name'>{getdata?.name}</p>   */}
          <List>
          {[getdata?.name].map((text, index) => (
            <ListItem key={text} disablePadding>
              {index === 0 ? <NavLink to='/settings' className='link'>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <CgProfile size={25} /> : null} 
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              </NavLink> : null}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Create notes', 'Deleted', 'About us'].map((text, index) => (
            <ListItem key={text} disablePadding>
              {index === 0 ? <NavLink to='/' className='link'>
                <ListItemButton>
                <ListItemIcon>
                  {/* <Link to='/'> */}
                  {index  === 0 ? <FaNotesMedical  size={23}/> : null}
                  {/* </Link> */}
                  {index  === 1 ? <MdDelete size={25} /> : null}
                  {index  === 2 ? <BiSupport size={25} /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              </NavLink> : null}
              {index === 1 ? <NavLink to='/deleted' className='link'>
                <ListItemButton>
                <ListItemIcon>
                  {/* <Link to='/'> */}
                  {index  === 0 ? <FaNotesMedical  size={23}/> : null}
                  {/* </Link> */}
                  {index  === 1 ? <MdDelete size={25} /> : null}
                  {index  === 2 ? <BiSupport size={25} /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              </NavLink> : null}
              {index === 2 ? <NavLink to='/about-us' className='link'>
                <ListItemButton>
                <ListItemIcon>
                  {/* <Link to='/'> */}
                  {index  === 0 ? <FaNotesMedical  size={23}/> : null}
                  {/* </Link> */}
                  {index  === 1 ? <MdDelete size={25} /> : null}
                  {index  === 2 ? <BiSupport size={25} /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
              </NavLink> : null}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Log out'].map((text, index) => (
            <ListItem key={text} disablePadding>
              {index === 0 ?
              <ListItemButton onClick={handleClickOpen}>
                <ListItemIcon>
                  {index === 0 ? <ImExit size={25} /> : null} 
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton> : null}
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet></Outlet>
      </Main>
      <div className="modal-delete">
         <LogOutModal handleClose={handleClose} open2={open2} />
            </div>
    </Box>
  );
}