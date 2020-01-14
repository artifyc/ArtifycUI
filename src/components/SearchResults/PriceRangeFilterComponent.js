import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Collapsible from "react-collapsible";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Popper from "@material-ui/core/Popper";
import "../../style/searchReturn/priceRangeFilter.css";
import Close from "@material-ui/icons/Close";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  typography: {
    fontFamily: ["Geneva"].join(","),
    htmlFontSize: 24,
    spacing: 4
  },
  palette: {
    primary: {
      main: "#696969"
    }
  },
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

export default function PriceRangeFilterComponent(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    singledollarsign: true,
    doubledollarsign: true,
    tripledollarsign: true,
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
    console.log("Price range filter state", state);
    props.changeState(state);
  }, [state]);

  const {singledollarsign, doubledollarsign, tripledollarsign} = state;
  const error =
    [singledollarsign, doubledollarsign, tripledollarsign].filter(v => v)
      .length !== 2;

  var numSingle = 0;
  for (var i = 0; i < props.data.length; i++) {
    if ([Object.values(props.data[i])[5]] == "$") {
      numSingle = numSingle + 1;
    }
  }
  numSingle = "$ (" + numSingle + ")";

  var numDouble = 0;
  for (var i = 0; i < props.data.length; i++) {
    if ([Object.values(props.data[i])[5]] == "$$") {
      numDouble = numDouble + 1;
    }
  }
  numDouble = "$$ (" + numDouble + ")";

  var numTriple = 0;
  for (var i = 0; i < props.data.length; i++) {
    if ([Object.values(props.data[i])[5]] == "$$$") {
      numTriple = numTriple + 1;
    }
  }
  numTriple = "$$$ (" + numTriple + ")";

  return (
    <div
      style={{color: "#696969", fontSize: "12px", marginLeft: "15px"}}
      id="pr"
    >
      <div onClick={dropdown()}>
        <p id="refine"> Price </p>
        <p class="minus" id="priceMinus">
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
                checked={singledollarsign}
                onChange={handleChange("singledollarsign")}
                value="singledollarsign"
              />
            }
            label={`${numSingle}`}
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
                checked={doubledollarsign}
                onChange={handleChange("doubledollarsign")}
                value="doubledollarsign"
              />
            }
            label={`${numDouble}`}
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
                checked={tripledollarsign}
                onChange={handleChange("tripledollarsign")}
                value="tripledollarsign"
              />
            }
            label={`${numTriple}`}
          />
        </FormGroup>
      </FormControl>
      <div className="yellow-line"> </div>
    </div>
  );
}
