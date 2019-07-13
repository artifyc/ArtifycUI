import React from 'react';
import SearchResultGrid from './SearchResultGrid';
import FilterContainer from './FilterContainer';
import DropDownFilter from './DropDownFilter';

class SearchResultComponent extends React.Component {
    render() {
        return (
            <div>
            <h3> Search Results For... </h3>
            <DropDownFilter />
            <FilterContainer />
            <SearchResultGrid />
            </div>
        )
    }
}

export default SearchResultComponent;
