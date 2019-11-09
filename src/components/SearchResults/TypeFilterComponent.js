import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapsible from 'react-collapsible';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function SingleFilterComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bust: true,
    waistup: false,
    fullbody: false,
    portrait: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { bust, waistup, fullbody, portrait } = state;
  const error = [bust, waistup, fullbody, portrait].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
    <Collapsible trigger="Commission Type" bust>
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
      </Collapsible>
    </div>
  );
}