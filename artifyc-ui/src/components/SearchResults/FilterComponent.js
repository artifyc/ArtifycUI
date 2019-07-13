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
    open: true,
    waitlist: false,
    closed: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { open, waitlist, closed } = state;
  const error = [open, waitlist, closed].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
    <Collapsible trigger="Artist Availability">
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={open} onChange={handleChange('open')} value="open" />}
            label="Open"
          />
          <FormControlLabel
            control={<Checkbox checked={waitlist} onChange={handleChange('waitlist')} value="waitlist" />}
            label="Waitlist"
          />
          <FormControlLabel
            control={
              <Checkbox checked={closed} onChange={handleChange('closed')} value="closed" />
            }
            label="Closed"
          />
        </FormGroup>
      </FormControl>
      </Collapsible>
    </div>
  );
}