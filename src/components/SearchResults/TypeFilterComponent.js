import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Collapsible from "react-collapsible";
import "../../style/searchReturn/commissionType.css";
import clsx from "clsx";
import checkedX from "../../assets/x.png";

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
    boxShadow: "inset 0 0 0 1px #696969, inset 0 -1px 0 #696969"
  },
  checkedIcon: {
    backgroundColor: "#d3d3d3",
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "url(${Image})",
    content: '""'
  }
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
    setState({...state, [name]: event.target.checked});
  };

  const dropdown = () => event => {
    if (state.hide == "none") {
      setState({...state, hide: "block", icon: "−"});
    } else {
      setState({...state, hide: "none", icon: "+"});
    }
  };

  useEffect(() => {
    console.log("Commission type filter state", state);
    props.changeState(state);
  }, [state]);

  const {bust, waistup, fullbody, portrait} = state;
  const error = [bust, waistup, fullbody, portrait].filter(v => v).length !== 2;

  var numBust = 0;
  for (var i = 0; i < props.data.length; i++) {
    if ([Object.values(props.data[i])[5]] == "Bust") {
      numBust = numBust + 1;
    }
  }
  numBust = "Bust (" + numBust + ")";

  var numWaist = 0;
  for (var i = 0; i < props.data.length; i++) {
    if ([Object.values(props.data[i])[4]] == "Half-body") {
      numWaist = numWaist + 1;
    }
  }
  numWaist = "Waist-up (" + numWaist + ")";

  var numFull = 0;
  for (var i = 0; i < props.data.length; i++) {
    if ([Object.values(props.data[i])[4]] == "Full-body") {
      numFull = numFull + 1;
    }
  }
  numFull = "Full body (" + numFull + ")";

  var numPortrait = 0;
  for (var i = 0; i < props.data.length; i++) {
    if ([Object.values(props.data[i])[4]] == "Portrait") {
      numPortrait = numPortrait + 1;
    }
  }
  numPortrait = "Portrait (" + numPortrait + ")";

  return (
    <div style={{color: "#696969", fontSize: "12px", marginLeft: "15px"}}>
      <div onClick={dropdown()}>
        <p id="refine"> Type </p>
        <p class="minus" id="typeMinus">
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
          <FormControlLabel
            control={
              <Checkbox
                style={{backgroundColor: "transparent"}}
                disableRipple
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                checked={bust}
                onChange={handleChange("bust")}
                value="bust"
              />
            }
            label={`${numBust}`}
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{backgroundColor: "transparent"}}
                disableRipple
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                checked={waistup}
                onChange={handleChange("waistup")}
                value="waistup"
              />
            }
            label={`${numWaist}`}
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{backgroundColor: "transparent"}}
                disableRipple
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                checked={fullbody}
                onChange={handleChange("fullbody")}
                value="fullbody"
              />
            }
            label={`${numFull}`}
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{backgroundColor: "transparent"}}
                disableRipple
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                checked={portrait}
                onChange={handleChange("portrait")}
                value="portrait"
              />
            }
            label={`${numPortrait}`}
          />
        </FormGroup>
      </FormControl>
      <div className="green-line"> </div>
    </div>
  );
}
