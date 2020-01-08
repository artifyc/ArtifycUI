import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ArtistCardComponent from './ArtistCard';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';


function ArtistPortfolioGrid(props) {

  console.log(props)
  var filteredList = []

  props.data.forEach(function (img) {

      {
         filteredList.push(img);
      }

  });

  var artistWork = props.data.map(function (el) {
        return el.artistWork
  })

console.log(artistWork)

const [spacing, setSpacing] = React.useState(2);
    return (
        <div className="srgrid">
        {artistWork.map (value => (
              <ArtistCardComponent data={value[2].src}/>
            ))}
        </div>
    )
}

export default (ArtistPortfolioGrid);
