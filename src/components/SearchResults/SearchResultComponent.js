import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchResultGrid from './SearchResultGrid';
import FilterContainer from './FilterContainer';
import '../../style/filterContainer.css'

export default function SearchResultComponent() {
    return (
        <Grid
        container
        direction="row"
        justify="left"
        alignItems="left"
        spacing={2}
        >
            <Grid item xs={2}>
                <FilterContainer/>
            </Grid>
            <Grid item xs={10}>
                <SearchResultGrid/>
            </Grid>
        </Grid>
    )
};
