import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchResultGrid from './SearchResultGrid';
import FilterContainer from './FilterContainer';
import '../../style/searchResult.css'

export default function SearchResultComponent() {
    return (
        <div>
          <div class="search-return-title">
            <p id="name-results"> Search Results: Castlevania </p>
            <p id="num-results"> 827 results </p>
          </div>
        <Grid
        container
        direction="row"
        justify="left"
        alignItems="left"
        spacing={2}
        >
            <Grid item sm={4}>
                <FilterContainer/>
            </Grid>
            <Grid item sm={8}>
                <SearchResultGrid/>
            </Grid>
        </Grid>
        </div>
    )
};
