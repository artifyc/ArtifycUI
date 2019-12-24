import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapsible from 'react-collapsible';
import '../../style/commissionType.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function TypeFilterComponent(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bust: true,
    waistup: true,
    fullbody: true,
    portrait: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  useEffect(() => {
      console.log('Commission type filter state', state);
      props.changeState(state)
    }, [state])

  const { bust, waistup, fullbody, portrait } = state;
  const error = [bust, waistup, fullbody, portrait].filter(v => v).length !== 2;

  return (
    <div style={{color: '#696969', fontSize: '12px'}}>
      <p id="refine"> Commission Type </p>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={bust} onChange={handleChange('bust')} value="bust" />}
            label="Bust"
          />
          <FormControlLabel
            control={<Checkbox checked={waistup} onChange={handleChange('waistup')} value="waistup" />}
            label="Waist-up"
          />
          <FormControlLabel
            control={
              <Checkbox checked={fullbody} onChange={handleChange('fullbody')} value="fullbody" />
            }
            label="Full body"
          />
          <FormControlLabel
            control={
              <Checkbox checked={portrait} onChange={handleChange('portrait')} value="portrait" />
            }
            label="Portrait"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
