import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'inline-block'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegration(props) {
  // const isSignupComplete = props.state.isSignupComplete
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const handleSubmission = props.handleSubmission
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {

  //   const data = {
  //     email: this.state.email,
  //     firstName: this.state.first,
  //     lastName: this.state.last,
  //     interest: this.state.value,
  //     message: this.state.message
  // };

//   fetch('https://nqga4cwr46.execute-api.us-east-1.amazonaws.com/prod', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then(res => res.json())
//     .then(res => console.log(res))
//     this.setState({first: '', last: '', email: '', value: 'Becoming a founding artist', show: false, message: '', thanks: true});
// }

    if (!loading) {
      setSuccess(false);
      setLoading(true);
      handleSubmission();
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Create Account
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
  
}
