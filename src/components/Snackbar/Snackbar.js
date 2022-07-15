import React from "react";
import  Snackbar  from "@material-ui/core/Snackbar";
import MuiAlert  from '@material-ui/lab/Alert'

import useStyles from './styles';



const CustomizeSnackbar = ({open,setOpen}) => {
    const classes=useStyles();

    const handleClose=(event,reason) =>{
        if(reason === 'clickway') 
          return;

         setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            >
             <MuiAlert onClose={handleClose} security="success" elevation={6} variant="filled" >
                 Transaction Succcessfully Created
             </MuiAlert>
            </Snackbar>
        </div>
    )
}


export default CustomizeSnackbar