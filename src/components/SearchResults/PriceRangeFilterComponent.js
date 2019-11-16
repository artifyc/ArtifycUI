import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapsible from 'react-collapsible';
import '../../style/filterContainer.css'

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
    singledollarsign: true,
    doubledollarsign: false,
    tripledollarsign: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { singledollarsign, doubledollarsign, tripledollarsign } = state;
  const error = [singledollarsign, doubledollarsign, tripledollarsign].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <Collapsible trigger="Price range" open>
      <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={singledollarsign} onChange={handleChange('singledollarsign')} value="singledollarsign" />}
            label="$"
          />
          <FormControlLabel
            control={<Checkbox checked={doubledollarsign} onChange={handleChange('doubledollarsign')} value="doubledollarsign" />}
            label="$$"
          />
          <FormControlLabel
            control={<Checkbox checked={tripledollarsign} onChange={handleChange('tripledollarsign')} value="tripledollarsign" />}
            label="$$$"
          />
        </FormGroup>
        </FormControl>
      </Collapsible>
    </div>
  );
}
