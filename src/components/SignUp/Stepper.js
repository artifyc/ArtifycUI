import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import ContactsIcon from '@material-ui/icons/Contacts';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ContactMailIcon from '@material-ui/icons/Mail';
import FormatLineSpacing from '@material-ui/icons/FormatLineSpacing';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContentOne from './ContentOne'
import ContentTwo from './ContentTwo'
import ContentThree from './ContentThree'
import ContentFour from './ContentFour'
import ContentFive from './ContentFive'
import SubmitButton from './SubmitButton'

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(46, 59, 85) 20%,  rgb(46, 59, 85) 40%, rgb(138,35,135) 150%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(46, 59, 85)20%,  rgb(46, 59, 85) 40%, rgb(138,35,135) 150%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);


const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(24, 205, 148) 100%,  rgb(63, 81, 181) 90%, rgb(0, 245, 159) 120%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(24, 205, 148) 100%, rgb(63, 81, 181) 90%,  rgb(0, 245, 159) 120%)',
  }

});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ContactsIcon/>,
    2: <ContactMailIcon />,
    3: <AspectRatioIcon />,
    4: <FormatLineSpacing />,
    5: <CreditCardIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-block'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

function getSteps() {
  return ['Profile Information', 'Gallery Preferences', 'Notification Preferences', 'Client Forms', 'Payment Info'];
}

function getStepContent(step, state, handleChange, handleRemoveDynamicFields, handleDynamicChange, handleDynamicFileChange, addDynamic, setDynamicState, validateField, handleDateChange, handleCheckChange, handlePhoneChange) {
  switch (step) {
    case 0:
      return (<ContentOne state={state} handleChange={handleChange} validateField={validateField} />);
    case 1:
      return (<ContentTwo state={state} handleChange={handleChange} handleDateChange={handleDateChange} validateField={validateField} handlePhoneChange={handlePhoneChange} />);
    case 2:
      return (<ContentThree state={state} handleChange={handleChange} validateField={validateField} handleCheckChange={handleCheckChange}/>);
    case 3:
      return (<ContentFour state={state} addDynamic={addDynamic} setDynamicState={setDynamicState} handleChange={handleChange} handleRemoveDynamicFields={handleRemoveDynamicFields} handleDynamicChange={handleDynamicChange} handleDynamicFileChange={handleDynamicFileChange} validateField={validateField} />);
    case 4: 
      return (<ContentFive state={state} handleChange={handleChange} />)
    default:
      return 'Unknown step';
  }
}


export default function CustomizedSteppers(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const state = props.state;
  const handleDateChange = props.handleDateChange;
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const validateField = props.validateField;
  const handleDynamicChange = props.handleDynamicChange;
  const handleRemoveDynamicFields = props.handleRemoveDynamicFields;
  const handleCheckChange = props.handleCheckChange;
  const handlePhoneChange = props.handlePhoneChange;
  const addDynamic = props.addDynamic;
  const setDynamicState = props.setDynamicState;
  const handleDynamicFileChange = props.handleDynamicFileChange;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmission = () => {
    handleSubmit();
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className="signup-container">
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            {/* <Button disabled={false} color="secondary" variant="contained" onClick={handleReset} className={classes.button}  >
              Reset
            </Button> */}
            <SubmitButton state={state} handleSubmission={handleSubmission}></SubmitButton>

          </div>
        ) : (
          <div>
            <div className="signup-container">
              <div>{getStepContent(activeStep, state, handleChange, handleRemoveDynamicFields, handleDynamicChange, handleDynamicFileChange, addDynamic, setDynamicState, validateField, handleDateChange, handleCheckChange, handlePhoneChange)}</div>
              <Button color="secondary" variant="contained" disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
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
