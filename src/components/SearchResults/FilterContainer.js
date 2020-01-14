import React, {useState, useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import AvailabilityFilterComponent from "./AvailabilityFilterComponent";
import PriceRangeFilterComponent from "./PriceRangeFilterComponent";
import TypeFilterComponent from "./TypeFilterComponent";
import AdditionalTags from "./AdditionalTags";
import {withStyles} from "@material-ui/styles";
import "../../style/searchReturn/filterContainer.css";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import {spacing} from "@material-ui/system";

const styles = {
  root: {}
};

function FilterContainer(props) {
  const [state, setState] = React.useState({
    open: true,
    waitlist: true,
    closed: true,
    singledollarsign: true,
    doubledollarsign: true,
    tripledollarsign: true,
    bust: true,
    waistup: true,
    fullbody: true,
    portrait: true
  });

  const changeState = stateValueFromChild => {
    var val = Object.values(stateValueFromChild);
    var ky = Object.keys(stateValueFromChild);

    setState({
      ...state,
      [Object.keys(stateValueFromChild)[0]]: Object.values(
        stateValueFromChild
      )[0],
      [Object.keys(stateValueFromChild)[1]]: Object.values(
        stateValueFromChild
      )[1],
      [Object.keys(stateValueFromChild)[2]]: Object.values(
        stateValueFromChild
      )[2],
      [Object.keys(stateValueFromChild)[3]]: Object.values(
        stateValueFromChild
      )[3],
      [Object.keys(stateValueFromChild)[4]]: Object.values(
        stateValueFromChild
      )[4],
      [Object.keys(stateValueFromChild)[5]]: Object.values(
        stateValueFromChild
      )[5],
      [Object.keys(stateValueFromChild)[6]]: Object.values(
        stateValueFromChild
      )[6],
      [Object.keys(stateValueFromChild)[7]]: Object.values(
        stateValueFromChild
      )[7],
      [Object.keys(stateValueFromChild)[8]]: Object.values(
        stateValueFromChild
      )[8],
      [Object.keys(stateValueFromChild)[9]]: Object.values(
        stateValueFromChild
      )[9]
    });
  };

  useEffect(() => {
    console.log("Filter state", state);
    props.changeState(state);
  }, [state]);

  return (
    <div class="filter" crossorigin src="...">
      <p id="refine"> Refine Search </p>
      <div className="black-line"> </div>
      <AvailabilityFilterComponent
        data={props.data}
        changeState={stateValueFromChild => changeState(stateValueFromChild)}
      />
      <PriceRangeFilterComponent
        data={props.data}
        changeState={stateValueFromChild => changeState(stateValueFromChild)}
      />
      <TypeFilterComponent
        data={props.data}
        changeState={stateValueFromChild => changeState(stateValueFromChild)}
      />
      <AdditionalTags
        data={props.data}
        changeState={stateValueFromChild => changeState(stateValueFromChild)}
      />
    </div>
  );
}

export default withStyles(styles)(FilterContainer);
