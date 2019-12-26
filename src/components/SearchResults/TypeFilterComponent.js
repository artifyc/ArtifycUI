import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapsible from 'react-collapsible';
import '../../style/commissionType.css'
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
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
}));

export default function TypeFilterComponent(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bust: true,
    waistup: true,
    fullbody: true,
    portrait: true,
    hide: "none",
    icon: "+"
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
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

  useEffect(() => {
      console.log('Commission type filter state', state);
      props.changeState(state)
    }, [state])

  const { bust, waistup, fullbody, portrait } = state;
  const error = [bust, waistup, fullbody, portrait].filter(v => v).length !== 2;

  var numBust = 0;
  for (var i=0; i<props.data.length; i++){
    if ([Object.values(props.data[i])[5]] == "Bust"){
      numBust = numBust + 1;
    }
  }
  numBust = "Bust (" + numBust + ")"


  var numWaist = 0;
  for (var i=0; i<props.data.length; i++){
    if ([Object.values(props.data[i])[4]] == "Half-body"){
      numWaist = numWaist + 1;
    }
  }
  numWaist = "Waist-up (" + numWaist + ")"

  var numFull = 0;
  for (var i=0; i<props.data.length; i++){
    if ([Object.values(props.data[i])[4]] == "Full-body"){
      numFull = numFull + 1;
    }
  }
  numFull = "Full body (" + numFull + ")"

  var numPortrait = 0;
  for (var i=0; i<props.data.length; i++){
    if ([Object.values(props.data[i])[4]] == "Portrait"){
      numPortrait = numPortrait + 1;
    }
  }
  numPortrait = "Portrait (" + numPortrait + ")"


  return (
    <div style={{color: '#696969', fontSize: '12px'}}>
    <div onClick={dropdown()}>
        <p id="refine"> Commission Type </p>
        <p class="minus" > {state.icon} </p>
      </div>
      <FormControl component="fieldset" className={classes.formControl} style={{ display: state.hide}}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox style={{ backgroundColor: 'transparent' }}        disableRipple   checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />} checked={bust} onChange={handleChange('bust')} value="bust" />}
            label={`${numBust}`}
          />
          <FormControlLabel
            control={<Checkbox style={{ backgroundColor: 'transparent' }}        disableRipple   checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />} checked={waistup} onChange={handleChange('waistup')} value="waistup" />}
            label={`${numWaist}`}
          />
          <FormControlLabel
            control={
              <Checkbox style={{ backgroundColor: 'transparent' }}        disableRipple   checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />} checked={fullbody} onChange={handleChange('fullbody')} value="fullbody" />
            }
            label={`${numFull}`}
          />
          <FormControlLabel
            control={
              <Checkbox style={{ backgroundColor: 'transparent' }}        disableRipple   checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />} checked={portrait} onChange={handleChange('portrait')} value="portrait" />
            }
            label={`${numPortrait}`}
          />
        </FormGroup>
      </FormControl>
      <div className="black-line"> </div>
    </div>
  );
}
