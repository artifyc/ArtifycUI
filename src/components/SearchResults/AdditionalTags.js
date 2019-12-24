import React, {useState, useEffect} from 'react';
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

  const result = tags.map(value => ({[value]: true}));
  const result2 = tags.reduce((obj, arrValue) => (obj[arrValue] = true, obj), []);
  var result3 = tags.reduce((obj, arrValue) => (obj[arrValue] = true, obj), {});

  const [state, setState] = React.useState({
  //  [Object.keys(result2)[0]]: Object.values(result2)[0],
    prince: true,
    jack: true,
    zelda: true
  });


  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  useEffect(() => {
    console.log('fdgsdfgdgfsdfg state', state);
  }, [state])


  var elements = tags
  return (
    <div style={{color: '#696969', fontSize: '12px'}} crossorigin src="...">
      <p id="refine"> Additional Tags </p>
      <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup>
          {elements.map((value, index) => {
              return <FormControlLabel
                          control={<Checkbox checked={elements[index]} onChange={handleChange(elements[index])} value="default" />}
                          label={elements[index]}
                        />

          })}
        </FormGroup>
        </FormControl>
    </div>
  );
}
