import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Collapsible from "react-collapsible";
import "../../style/searchReturn/additionalTags.css";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  icon: {
    borderRadius: 0,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#d3d3d3"
  },
  checkedIcon: {
    backgroundColor: "#d3d3d3",
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""'
  }
}));

export default function AdditionalTags(props) {
  const classes = useStyles();
  var tags = [];

  props.data.forEach(function(img) {
    if (img.tags.length > 1) {
      for (var i = 0; i < img.tags.length; i++) {
        if (!tags.includes(img.tags[i]) && tags.length < 15) {
          tags.push(img.tags[i]);
        }
      }
    } else {
      tags.push(img.tags);
    }
  });

  const dropdown = () => event => {
    if (state.hide == "none") {
      setState({...state, hide: "block", icon: "−"});
    } else {
      setState({...state, hide: "none", icon: "+"});
    }
  };

  const result = tags.map(value => ({[value]: true}));
  const result2 = tags.reduce(
    (obj, arrValue) => ((obj[arrValue] = true), obj),
    []
  );
  var result3 = tags.reduce(
    (obj, arrValue) => ((obj[arrValue] = true), obj),
    {}
  );
  var newState = {};
  var temp = result2[0];

  const [state, setState] = React.useState({
    hide: "none",
    icon: "+"
  });

  const handleChange = name => event => {
    setState({...state, [name]: event.target.checked});
  };

  useEffect(() => {
    console.log("Tag state", state);
    props.changeState(state);
  }, [state]);

  var elements = tags;
  return (
    <div
      style={{color: "#696969", fontSize: "12px", marginLeft: "15px"}}
      crossorigin
      src="..."
    >
      <div onClick={dropdown()}>
        <p id="refine"> Tags </p>
        <p class="minus" id="tagMinus">
          {" "}
          {state.icon}{" "}
        </p>
      </div>
      <FormControl
        class="form"
        component="fieldset"
        style={{display: state.hide, marginLeft: "-8px", marginTop: "-5px"}}
      >
        <FormGroup>
          {elements.map((value, index) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    style={{backgroundColor: "transparent"}}
                    disableRipple
                    checkedIcon={
                      <span
                        className={clsx(classes.icon, classes.checkedIcon)}
                      />
                    }
                    icon={<span className={classes.icon} />}
                    checked={state[elements[index]]}
                    onChange={handleChange(elements[index])}
                    value={"default"}
                    defaultChecked
                  />
                }
                label={elements[index]}
              />
            );
          })}
        </FormGroup>
      </FormControl>
      <div className="blue-line"> </div>
    </div>
  );
}
