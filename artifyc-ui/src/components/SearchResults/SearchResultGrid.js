import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent from './CardComponent';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        
    }
}

function SearchResultGrid(props) {
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
