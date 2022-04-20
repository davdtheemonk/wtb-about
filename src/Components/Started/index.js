import React from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import "./styles.css"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 ,color:"white",backgroundColor:"rgb(51,51,51)"}} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  
export default function Home(){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <div className="started__cont_over">
                  <BootstrapDialog 
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Our Mission
        </BootstrapDialogTitle>
        <DialogContent sx={{backgroundColor:"rgb(51,51,51)",color:"white"}} dividers>
          <Typography gutterBottom>
         Here at wtb  we are focused to develop a platform for programming curriculums.We aim at providing,100% an ecosystem that supports online video conferencing ,collaboration and interaction between students.Providing an end-to-end environment for students to collaborate on courses and course work.
         
          </Typography>
        </DialogContent>
        
      </BootstrapDialog>

            <div className="get_started" id="started">
                <div className="get_started__date">
                <h3>Wednesday</h3>
                <div className="get_started_date">
                <p className="get_started_date1">Apr 20,2022</p>
                <p className="get_started_date2">Mombasa,Kenya</p>
                </div>
                <div className="get_started_desc">
                <p>To revolutionize is to change.We are trying to focus on building a future in the way tech courses are taught.There has been an increase in Students engaging in online bootcamps to further their enthusiast and interest in programming.Here at .... we are building a platform for organizations or individuals that want to offer tech education especially in programming in an approach that includes collaboration and interactivity.</p>
                </div>
                
                <button className="news-btn" onClick={handleClickOpen}>Our Mission</button>
                
                </div>
                <img className="get_started_pic" src="eng.svg" />
               
            </div>
            <div className="get_started_timer">
        
           <div className="get_started_boxes">
           <div className="get_started_hours"></div>
           <div className="get_started_minutes"></div>
           <div className="get_started_seconds"></div>
           </div>
           
       </div>
               
     
        </div>
    )
}