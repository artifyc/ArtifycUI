import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchResultGrid from './SearchResultGrid';
import FilterContainer from './FilterContainer';
import '../../style/searchResult.css';
import axios from 'axios';

export default function SearchResultComponent() {
  const [data, setData] = useState( [] );

  useEffect(() => {
  /*  const fetchData = async () => {
      const result = await axios(
        `http://localhost:9000/searchResults`, { crossdomain: true, headers: {'X-Requested-With': 'XMLHttpRequest'}, responseType: 'json', responseEncoding: 'utf8'}
      );
  */
      fetch("http://localhost:9000/searchResults")
      .then(response => response.json())
        .then(data =>
          setData(data));

  }, [])
  /*    setData([result.data[0].tags]);
    };
    fetchData();
}, []);*/


/*
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `https://deioiwruf2.execute-api.us-east-1.amazonaws.com/dev/search`,
        );

        var mockResponseArray = []
        var mockResponse = (Object.entries(result))[0];
        var imgConversion;
        console.log("mock Reponse", mockResponse)
        for (var i=0; i<mockResponse.length-1; i++){
          mockResponseArray[i] = mockResponse[i+1]
          mockResponseArray[i].imageSource = `data:image/jpeg;base64, ${mockResponseArray[0].imageSource}`
        }
        console.log("final array", mockResponseArray[0].id)
        setData(mockResponseArray);
      };
      fetchData();
      }, []);
*/

    return (
        <div crossorigin src="...">
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
                <FilterContainer data={data}/>
            </Grid>
            <Grid item sm={8}>
                <SearchResultGrid data={data} />
            </Grid>
        </Grid>
        </div>
    )
};
