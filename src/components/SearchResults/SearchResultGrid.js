import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent from './CardComponent';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import '../../style/grid.css'

const styles = {
    root: {
    }
}

function SearchResultGrid(props) {

  console.log(props.data)

    return (
        <div className="srgrid">
          <Grid
              container
              direction="row"
              justify="left"
              alignItems="center"
              spacing={1}
              >
              {props.data.map(item => (
              <Grid key={item.id} item>
                  <CardComponent {...item}/>
              </Grid>
              ))}
          </Grid>
        </div>
    )
}

export default withStyles(styles)(SearchResultGrid);
