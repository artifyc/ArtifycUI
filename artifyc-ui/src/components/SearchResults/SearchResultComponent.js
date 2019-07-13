import React from 'react';
import SearchResultGrid from './SearchResultGrid';
import FilterContainer from './FilterContainer';

class SearchResultComponent extends React.Component {
    render() {
        return (
            <div>
            <FilterContainer/>
            <SearchResultGrid/>
            </div>
        )
    }
}

export default SearchResultComponent;