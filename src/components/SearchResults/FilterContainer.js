import React from 'react';
import Paper from '@material-ui/core/Paper';
import AvailabilityFilterComponent from './AvailabilityFilterComponent';
import PriceRangeFilterComponent from './PriceRangeFilterComponent';
import TypeFilterComponent from './TypeFilterComponent';
import AdditionalTags from './AdditionalTags';
import { withStyles } from '@material-ui/styles';
import '../../style/filterContainer.css'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { spacing } from '@material-ui/system';

const styles = {
    root: {
    }
}

function FilterContainer(props) {
    const { classes } = props;
    return (
      <div class="filter">
        <p id="refine"> Refine Search </p>
        <div className="black-line"> </div>
            <AvailabilityFilterComponent/>
            <PriceRangeFilterComponent/>
            <TypeFilterComponent/>
            <AdditionalTags/>
      </div>
    )

}

export default withStyles(styles)(FilterContainer);
