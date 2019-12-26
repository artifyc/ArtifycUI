import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import CardComponent from '../SearchResults/CardComponent';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import '../../style/grid.css'


function ArtistPortfolioGrid(props) {

  console.log(props)
  var filteredList = []

  props.data.forEach(function (img) {

      {
         filteredList.push(img);
      }

  });

filteredList = props.data
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

export default (ArtistPortfolioGrid);
