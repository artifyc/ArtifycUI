import React, { useState, useEffect } from 'react';
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



function FilterContainer() {
  const [data, setData] = useState( [] );
  var tags = [];
  useEffect(() => {
  /*  const fetchData = async () => {
      const result = await axios(
        `http://localhost:9000/searchResults`, { crossdomain: true, headers: {'X-Requested-With': 'XMLHttpRequest'}, responseType: 'json', responseEncoding: 'utf8'}
      );
  */
      fetch("http://localhost:9000/searchResults")
      .then(response => response.json())
        .then(function(data){
          for (var i=0; i<data.length; i++){
            if (data[i].tags.length > 1){
              for (var ii=0; ii<data[i].tags.length; ii++){
                tags.push(data[i].tags[ii])
              }
            }
            else {
              tags.push(data[i].tags)
            }
          }
          setData(tags);
        })
  }, [])

console.log(data)
    return (
      <div class="filter" crossorigin src="...">
        <p id="refine"> Refine Search </p>
        <div className="black-line"> </div>
            <AvailabilityFilterComponent/>
            <PriceRangeFilterComponent/>
            <TypeFilterComponent/>
            <AdditionalTags data={data}/>
      </div>
    )

}

export default withStyles(styles)(FilterContainer);
