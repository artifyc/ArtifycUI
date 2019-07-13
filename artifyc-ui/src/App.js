import React from 'react';
import './style/App.css';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GridListTile from '@material-ui/core/GridListTile';
import Example from './assets/example.jpg';
import GridList from "@material-ui/core/GridList";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        <GridListTile>
          <img src={Example} alt="Example Pic"/>
          <p> Hello </p>
        </GridListTile>
        <GridListTile>
          <img src={Example} alt="Example Pic"/>
          <p> Hello </p>
        </GridListTile>
        <GridListTile>
          <img src={Example} alt="Example Pic"/>
          <p> Hello </p>
        </GridListTile>
        </Grid>


      </header>
    </div>
  );
}

export default App;
