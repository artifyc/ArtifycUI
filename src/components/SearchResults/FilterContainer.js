import React from 'react';
import Paper from '@material-ui/core/Paper';
import AvailabilityFilterComponent from './AvailabilityFilterComponent';
import PriceRangeFilterComponent from './PriceRangeFilterComponent';
import TypeFilterComponent from './TypeFilterComponent';
import { withStyles } from '@material-ui/styles';
import '../../style/filterContainer.css'

const styles = {
    root: {
        width: 200
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
