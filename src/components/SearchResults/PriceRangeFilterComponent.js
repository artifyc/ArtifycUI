import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapsible from 'react-collapsible';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../../style/priceRangeFilter.css'
import Close from '@material-ui/icons/Close';

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
    doubledollarsign: true,
    tripledollarsign: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  useEffect(() => {
      console.log('Price range filter state', state);
    }, [state])

  const { singledollarsign, doubledollarsign, tripledollarsign } = state;
  const error = [singledollarsign, doubledollarsign, tripledollarsign].filter(v => v).length !== 2;

  return (
    <div style={{color: '#696969', fontSize: '12px'}}>
      <p id="refine"> Price Range </p>
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
            control={<Checkbox icon={<Checkbox />} checkedIcon={<Close />} checked={tripledollarsign} onChange={handleChange('tripledollarsign')} value="tripledollarsign" />}
            label="$$$"
          />
          <hi />
        </FormGroup>
        </FormControl>
    </div>
  );
}
