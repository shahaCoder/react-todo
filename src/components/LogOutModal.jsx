import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { AuthContext } from '../Context/Context';
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LogOutModal({ open2, handleClose }) {
    const { setIsAuth } = React.useContext(AuthContext)
  function logOut() {
    localStorage.clear()
    setIsAuth(false)
  } 
  return (
    <div>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure you want to log out of your account?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You will be moved to first page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Link to='/hola'>
          <Button onClick={logOut}>log Out</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
