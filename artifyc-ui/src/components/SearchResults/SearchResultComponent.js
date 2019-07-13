import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchResultGrid from './SearchResultGrid';
import FilterContainer from './FilterContainer';

export default function SearchResultComponent() {
    return (
        <Grid
        container
        direction="row"
        justify="left"
        alignItems="left"
        spacing={2}
        >
            <Grid item xs={3}>
                <FilterContainer/>
            </Grid>
            <Grid item xs={9}>
                <SearchResultGrid/>
            </Grid>
        </Grid>
    ) 
};