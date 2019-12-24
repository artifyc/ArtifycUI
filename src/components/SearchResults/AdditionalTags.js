import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapsible from 'react-collapsible';
import '../../style/additionalTags.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function AdditionalTags(props) {
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

  var tags = []

  props.data.forEach(function (img) {
      if (img.tags.length > 1){
        for (var i=0; i<img.tags.length; i++){
          tags.push(img.tags[i])
        }
      }
      else {
        tags.push(img.tags);
      }
  });

  var elements = tags
  return (
    <div style={{color: '#696969', fontSize: '12px'}} crossorigin src="...">
      <p id="refine"> Additional Tags </p>
      <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup>
          {elements.map((value, index) => {
              return <FormControlLabel
                          control={<Checkbox checked={singledollarsign} onChange={handleChange('singledollarsign')} value="singledollarsign" />}
                          label={value}
                        />

          })}
        </FormGroup>
        </FormControl>
    </div>
  );
}
