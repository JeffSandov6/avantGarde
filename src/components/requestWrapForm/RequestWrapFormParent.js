import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from 'reactstrap';


import NameStep from './requestWrapFormSteps/NameStep';
import RequestReasonStep from './requestWrapFormSteps/RequestReasonStep';
import EmailPhoneStep from './requestWrapFormSteps/EmailPhoneStep';
import AddressStep from './requestWrapFormSteps/AddressStep';
import CommercialResidentialStep from './requestWrapFormSteps/CommercialResidentialStep';


//TODO: add validation in each step
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

//this function is the one that allows you to add a label next to the numbers in the form stepper
function getSteps() {
  return ['', '', '', '', ''];
}

export default function RequestWrapFormParent() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [requestReason, setRequestReason] = React.useState("");
  const [emailOrPhone, setEmailOrPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [commercialOrResidential, setCommercialOrResidential] = React.useState("");
  
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
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
            <Typography className={classes.instructions}>
              All steps completed - you're finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button 
                disabled={activeStep === 0} 
                onClick={handleBack} 
                className={classes.button}
                color="primary"
            >
                Back
              </Button>
              

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
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
