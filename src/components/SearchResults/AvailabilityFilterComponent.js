import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapsible from 'react-collapsible';
import '../../style/availabilityFilter.css'


export default function SingleFilterComponent() {
  const [state, setState] = React.useState({
    open: true,
    waitlist: true,
    closed: true
  });
  const { open, waitlist, closed } = state;

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  };

  useEffect(() => {
    console.log('Availability state', state);
  }, [state])

  const error = [open, waitlist, closed].filter(v => v).length !== 2;

  return (
    <div style={{color: '#696969', fontSize: '12px'}}>
      <p id="refine"> Artist Availability </p>
      <p class="minus"> - </p>
      <FormControl component="fieldset" >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={open} onChange={handleChange('open')} value="default" />}
            label="Open"
          />
          <FormControlLabel
            control={<Checkbox checked={waitlist} onChange={handleChange('waitlist')} value="default" />}
            label="Waitlist"
          />
          <FormControlLabel
            control={
              <Checkbox checked={closed} onChange={handleChange('closed')} value="default" />
            }
            label="Closed"
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}
