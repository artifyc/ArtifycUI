import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import CardComponent from './CardComponent';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import '../../style/grid.css'
import Paper from '@material-ui/core/Paper';
const styles = {
    root: {
    }
}

function SearchResultGrid(props) {

  var filteredList = []

  props.data.forEach(function (img) {

    var tempState = {open: false,
      waitlist: false,
      closed: false,
      singledollarsign: false,
      doubledollarsign: false,
      tripledollarsign: false,
      bust: false,
      waistup: false,
      fullbody: false,
      portrait: false}

      switch(img.priceRange){
        case "$":
          tempState.singledollarsign = true;
        break;
        case "$$":
          tempState.doubledollarsign = true;
        break;
        case "$$$":
          tempState.tripledollarsign = true;
        break;
      }

      switch(img.artistAvailability){
        case "Open":
          tempState.open = true;
        break;
        case "Waitlist":
          tempState.waitlist = true;
        break;
        case "Closed":
          tempState.closed = true;
        break;
      }

      switch(img.commissionType){
        case "Half-body":
          tempState.waistup = true;
        break;
        case "Full-body":
          tempState.fullbody = true;
        break;
        case "Bust":
          tempState.bust = true;
        break;
        case "Portrait":
          tempState.portrait = true;
        break;
      }

      if (((props.newState.singledollarsign && tempState.singledollarsign)
          || (props.newState.doubledollarsign && tempState.doubledollarsign)
          || (props.newState.tripledollarsign && tempState.tripledollarsign))

          &&

          ((props.newState.open && tempState.open)
              || (props.newState.waitlist && tempState.waitlist)
              || (props.newState.closed && tempState.closed))

          &&

          ((props.newState.waistup && tempState.waistup)
              || (props.newState.fullbody && tempState.fullbody)
              || (props.newState.bust && tempState.bust)
              || (props.newState.portrait && tempState.portrait)))

      {
         filteredList.push(img);
      }

  });

const [spacing, setSpacing] = React.useState(2);
    return (
        <div className="srgrid">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="left" spacing={spacing}>
              {filteredList.map(value => (
                <Grid key={value.id} item>
                  <CardComponent {...value}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        </div>
    )
}

export default withStyles(styles)(SearchResultGrid);
