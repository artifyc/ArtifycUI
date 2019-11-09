import React from 'react';
import Paper from '@material-ui/core/Paper';
import FilterComponent from './FilterComponent';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        width: '15vw',
        position: 'relative',
        marginLeft: '15px',
        marginTop: '15px',
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