import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { Row, Container } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
// import Button from '@material-ui/core/Button';
// import {pink} from '@material-ui/core/Colors';

import RequestWrapFormParent from './RequestWrapFormParent';
import "./RequestWrapForm.css";

//Question: do you want the top view that shows the step numbers anchored,
//or do you not mind that it moves every time to center itself?

//TODO: add close button 

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialogBackground: {
      backgroundColor: 'black',
  },
  closeButtonStyle: {
      backgroundColor: 'white',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RequestWrapFormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    props.closeRequestWrapForm();
  };

  return (
    <>
        <Dialog
            fullScreen 
            open={open} 
            onClose={handleClose} 
            TransitionComponent={Transition}
            PaperProps={{
                style: {backgroundColor: 'black'}
            }}
        >
        
          <Container className="h-100">
            <IconButton
              size="large"
              style={{
                // display: 'inline-flex',
                backgroundColor: 'white',
                position: 'absolute',
                right: 30,
                top: 20,
              }}
              onClick={handleClose}
              sx={{
                color: 'white',
              }}
            >
              <CancelIcon 
                // color="primary"
                style={{
                  fill: 'blue'
                }}
              />
            </IconButton>
            <Row className="justify-content-center align-items-center h-100 background-color-form">
                <RequestWrapFormParent
                  closeWrapFormDialog={handleClose}
                />
            </Row>
          </Container>
      </Dialog>
    </>
  );
}
