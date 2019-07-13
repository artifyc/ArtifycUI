import React from 'react';
import Paper from '@material-ui/core/Paper';
import FilterComponent from './FilterComponent';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        
    }
}

function FilterContainer(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            {[0,1,2,3].map(value => (
                <FilterComponent/> 
            ))}
        </Paper>
    )

}

export default withStyles(styles)(FilterContainer);