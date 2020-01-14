import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import SearchResultGrid from "./SearchResultGrid";
import FilterContainer from "./FilterContainer";
import "../../style/searchReturn/searchResult.css";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import {createMuiTheme} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import SortDropdown from "./SortDropdown";
export default function SearchResultComponent() {
  const [data, setData] = useState([]);
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Geneva"].join(","),
      htmlFontSize: 24,
      spacing: 4
    },
    palette: {
      primary: {
        main: "#696969"
      }
    }
  });

  useEffect(() => {
    //  "https://deioiwruf2.execute-api.us-east-1.amazonaws.com/dev/search"
    fetch("http://localhost:9000/searchResults")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

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
      )[9],
      [Object.keys(stateValueFromChild)[10]]: Object.values(
        stateValueFromChild
      )[10],
      [Object.keys(stateValueFromChild)[11]]: Object.values(
        stateValueFromChild
      )[11],
      [Object.keys(stateValueFromChild)[12]]: Object.values(
        stateValueFromChild
      )[12],
      [Object.keys(stateValueFromChild)[13]]: Object.values(
        stateValueFromChild
      )[13],
      [Object.keys(stateValueFromChild)[14]]: Object.values(
        stateValueFromChild
      )[14],
      [Object.keys(stateValueFromChild)[15]]: Object.values(
        stateValueFromChild
      )[15],
      [Object.keys(stateValueFromChild)[16]]: Object.values(
        stateValueFromChild
      )[16],
      [Object.keys(stateValueFromChild)[17]]: Object.values(
        stateValueFromChild
      )[17],
      [Object.keys(stateValueFromChild)[18]]: Object.values(
        stateValueFromChild
      )[18],
      [Object.keys(stateValueFromChild)[19]]: Object.values(
        stateValueFromChild
      )[19]
    });
  };

  return (
    <div crossorigin src="...">
      <div class="search-return-title">
        <p id="name-results"> Search Results: Castlevania </p>{" "}
        <p id="num-results"> {data.length} results </p>{" "}
      </div>{" "}
      <p id="sortingBy"> Sort By: </p>
      <div class="sortDropdown">
        <SortDropdown />
      </div>
      <div class="grid-container">
        <FilterContainer
          data={data}
          changeState={stateValueFromChild => changeState(stateValueFromChild)}
        />{" "}
        <SearchResultGrid data={data} newState={state} />{" "}
      </div>{" "}
    </div>
  );
}
