// import React, {Fragment} from 'react';


import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './button.modal.style.scss';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className = "button button-modal-user" variant="outlined" color="primary" onClick={handleClickOpen}>
        Details
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
        <DialogTitle id="alert-dialog-title">{props.users.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            <span className = "user-feature">First and Last name:</span> {props.users.name}
            <br />
            <span className = "user-feature">E-mail:</span> {props.users.email}
            <br />            
            <span className = "user-feature">City:</span> {props.users.city}
            <br />            
            <span className = "user-feature">Postal Code:</span> {props.users.code}
            <br />            
            <span className = "user-feature">Country:</span> {props.users.country}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}





// class UserDetails extends React.Component{
//     constructor(props){
//         super(props);
//     }
    
// }

// export default UserDetails;