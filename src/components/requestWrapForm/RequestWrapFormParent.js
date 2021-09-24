import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Row } from 'reactstrap';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


import NameStep from './requestWrapFormSteps/NameStep';
import RequestReasonStep from './requestWrapFormSteps/RequestReasonStep';
import EmailPhoneStep from './requestWrapFormSteps/EmailPhoneStep';
import AddressStep from './requestWrapFormSteps/AddressStep';
import CommercialResidentialStep from './requestWrapFormSteps/CommercialResidentialStep';

//Question: after all steps are done, what do you want to happen?
//The way i have it now, or do you want to add a popup saying something like
//"Your request was sent succesfully, we will get back to you as soon as possible"


//Question: do you want to add a border around the form?
//Or do you want it to look different in general?

//TODO: add validation in each step
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // borderColor: 'white',
    // borderStyle: 'solid',
    // padding: '50px',
    
  },
  button: {
    marginRight: theme.spacing(1),
  },
  rightButton: {
      float: 'right',
    //   backgroundColor: 'red',
  },
  leftButton: {
      float: 'left',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      fontSize: '30px',
  },
  finalMessagePositioning: {
      textAlign: 'center',
  },
  closeButtonPositioning: {
      display: 'block',
      marginRight: 'auto',
      marginLeft: 'auto',
  },
}));

//this function is the one that allows you to add a label next to the numbers in the form stepper
function getSteps() {
  return ['Name', 'Reason for Request', 'Method of Contact', 'Address', 'Job Type'];
}

const requestSuccesfullySentMessage = "Thank you, we will get back to you as soon as possible!";
const requestFailedToSendMessage = "Sorry, there was an error in attempting to send your request, and we will work to fix this as soon as possible. " + 
                "In the meantime, you can get in touch with us directly through our social media accounts, or through our phone number. " +
                "Sorry for the inconvenience!"

export default function RequestWrapFormParent(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [requestReason, setRequestReason] = React.useState("");
  const [emailOrPhone, setEmailOrPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [commercialOrResidential, setCommercialOrResidential] = React.useState("");
  const [requestSentOrFailedMessage, setRequestSentOrFailedMessage] = React.useState("");
  const [showLoader, setShowLoader] = React.useState(false);
  
  const steps = getSteps();

  function clearEmailOrPhoneState() {
      setEmailOrPhone("");
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <NameStep name={name} setName={setName}/>;
      case 1:
        return <RequestReasonStep requestReason={requestReason} setRequestReason={setRequestReason}/>;
      case 2:
        return <EmailPhoneStep emailOrPhone={emailOrPhone} setEmailOrPhone={setEmailOrPhone} clearEmailOrPhoneState={clearEmailOrPhoneState}/>;
      case 3:
        return <AddressStep address={address} setAddress={setAddress}/>;
      case 4:
        return <CommercialResidentialStep commercialOrResidential={commercialOrResidential} setCommercialOrResidential={setCommercialOrResidential}/>;
      default:
        return 'Unknown step';
    }
  }

  //TODO: if all steps are completed, this is where i would then send all the information the user provided to the company email
  //need to add error handling letting the user know if the request failed (a modal?)
  //if it is succesful, let the user know that it was succesful and that we will get back to them as soon as possible
  //also, the only button that needs to be shown after that is a 'Close' button
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if(activeStep === steps.length - 1) {
        setShowLoader(true);
        setTimeout(function() {
            setShowLoader(false);
            setRequestSentOrFailedMessage(requestFailedToSendMessage);
        }, 5000);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
    <Backdrop 
        className={classes.backdrop}
        open={showLoader}
        >
        Sending Request
        <CircularProgress color="inherit"/>
    </Backdrop>
        <Row className="justify-content-center">
            <h1>Request a Wrap</h1>
        </Row>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <div>
          {/* below is whats shown when all steps are completed */}
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions, classes.finalMessagePositioning}>
              {requestSentOrFailedMessage}
            </Typography>
            <Button 
                variant="contained" color="primary" onClick={props.closeWrapFormDialog} 
                className={classes.button, classes.closeButtonPositioning}
            >
              Close
            </Button>
          </div>
        ) : (

            //below is for whats shown while going through the form
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button 
                disabled={activeStep === 0} 
                variant="contained"
                color="primary"
                onClick={handleBack} 
                className={classes.button, classes.leftButton}
              >
                Back
              </Button>
              
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button, classes.rightButton}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
