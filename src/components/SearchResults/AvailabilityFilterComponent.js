import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapsible from 'react-collapsible';
import '../../style/availabilityFilter.css'
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
  icon: {
    borderRadius: 0,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#d3d3d3'
  },
  checkedIcon: {
    backgroundColor: '#d3d3d3',
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
  },
});

export default function AvailabilityFilterComponent(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: true,
    waitlist: true,
    closed: true,
    hide: "none",
    icon: "+"
  });
  const { open, waitlist, closed } = state;


  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  };

  const dropdown = () => event => {
    if (state.hide == 'none'){
      setState({ ...state,
         hide: "block",
         icon: "−"
      });
    }
    else {
      setState({ ...state,
         hide: "none",
         icon: "+"
      });
    }
 };

 var numClosed = 0;
 for (var i=0; i<props.data.length; i++){
   if ([Object.values(props.data[i])[3]] == "Closed"){
     numClosed = numClosed + 1;
   }
 }
 numClosed = "Closed (" + numClosed + ")"


 var numOpen = 0;
 for (var i=0; i<props.data.length; i++){
   if ([Object.values(props.data[i])[3]] == "Open"){
     numOpen = numOpen + 1;
   }
 }
 numOpen = "Open (" + numOpen + ")"


 var numWaitlist = 0;
 for (var i=0; i<props.data.length; i++){
   if ([Object.values(props.data[i])[3]] == "Waitlist"){
     numWaitlist = numWaitlist + 1;
   }
 }
 numWaitlist = "Waitlist (" + numWaitlist + ")"


  useEffect(() => {
    console.log('Availability state', state);
    props.changeState(state)
  }, [state])

  const error = [open, waitlist, closed].filter(v => v).length !== 2;

  return (
    <div style={{color: '#696969', fontSize: '12px', marginLeft: '15px'}}>
    <div onClick={dropdown()}>
        <p id="refine"> Artist Availability </p>
        <p class="minus" id="availMinus" > {state.icon} </p>
      </div>

  <FormControl class="form" component="fieldset" style={{ display: state.hide}}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox style={{ backgroundColor: 'transparent' }}        disableRipple   checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />} checked={open} onChange={handleChange('open')} value="default" />}
            label={`${numOpen}`}
          />

          <FormControlLabel
            control={<Checkbox style={{ backgroundColor: 'transparent' }}        disableRipple   checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />} checked={waitlist} onChange={handleChange('waitlist')} value="default" />}
            label={`${numWaitlist}`}
          />
          <FormControlLabel
            control={
              <Checkbox style={{ backgroundColor: 'transparent' }}        disableRipple   checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />} checked={closed} onChange={handleChange('closed')} value="default" />
            }
            label={`${numClosed}`}
          />
        </FormGroup>
      </FormControl>
      <div className="red-line"> </div>
    </div>
  )
}
