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
            `https://deioiwruf2.execute-api.us-east-1.amazonaws.com/dev/search`,
          );
          console.log(result)
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
            spacing={1}
            >
            {data.map(item => (
            <Grid key={item.id} item>
                <CardComponent {...item}/>
            </Grid>
            ))}
        </Grid>
    )
}

export default withStyles(styles)(SearchResultGrid);
