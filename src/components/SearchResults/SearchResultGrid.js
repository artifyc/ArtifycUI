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
    const [data, setData] = useState( [] );

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `http://localhost:9000/searchResults`,
          );
          setData(result.data);
        };
        fetchData();
      }, []);

    const { classes } = props;

    return (
        <Grid className={classes.root}
            container
            direction="row"
            justify="left"
            alignItems="center"
            spacing={2}
            >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,].map(value => (
            <Grid key={value} item>
                <CardComponent />
            </Grid>
            ))}
        </Grid>
    )
}

export default withStyles(styles)(SearchResultGrid);
