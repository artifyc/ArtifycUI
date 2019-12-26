import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchResultGrid from './SearchResultGrid';
import FilterContainer from './FilterContainer';
import '../../style/searchResult.css';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';

export default function SearchResultComponent() {
  const [data, setData] = useState( [] );
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Geneva'
      ].join(','),
      htmlFontSize: 24,
      spacing: 4
    },
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#696969',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
    }
  })

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
    const [state, setState] = React.useState({
      open: true,
      waitlist: true,
      closed: true,
      singledollarsign: true,
      doubledollarsign: true,
      tripledollarsign: true,
      bust: true,
      waistup: true,
      fullbody: true,
      portrait: true
    });

    const changeState = stateValueFromChild => {
      setState({
        ...state,
        [Object.keys(stateValueFromChild)[0]]: Object.values(stateValueFromChild)[0],
        [Object.keys(stateValueFromChild)[1]]: Object.values(stateValueFromChild)[1],
        [Object.keys(stateValueFromChild)[2]]: Object.values(stateValueFromChild)[2],
        [Object.keys(stateValueFromChild)[3]]: Object.values(stateValueFromChild)[3],
        [Object.keys(stateValueFromChild)[4]]: Object.values(stateValueFromChild)[4],
        [Object.keys(stateValueFromChild)[5]]: Object.values(stateValueFromChild)[5],
        [Object.keys(stateValueFromChild)[6]]: Object.values(stateValueFromChild)[6],
        [Object.keys(stateValueFromChild)[7]]: Object.values(stateValueFromChild)[7],
        [Object.keys(stateValueFromChild)[8]]: Object.values(stateValueFromChild)[8],
        [Object.keys(stateValueFromChild)[9]]: Object.values(stateValueFromChild)[9],
        [Object.keys(stateValueFromChild)[10]]: Object.values(stateValueFromChild)[10],
        [Object.keys(stateValueFromChild)[11]]: Object.values(stateValueFromChild)[11],
        [Object.keys(stateValueFromChild)[12]]: Object.values(stateValueFromChild)[12],
        [Object.keys(stateValueFromChild)[13]]: Object.values(stateValueFromChild)[13],
        [Object.keys(stateValueFromChild)[14]]: Object.values(stateValueFromChild)[14],
                [Object.keys(stateValueFromChild)[15]]: Object.values(stateValueFromChild)[15],
                        [Object.keys(stateValueFromChild)[16]]: Object.values(stateValueFromChild)[16],
                                [Object.keys(stateValueFromChild)[17]]: Object.values(stateValueFromChild)[17],
                                        [Object.keys(stateValueFromChild)[18]]: Object.values(stateValueFromChild)[18],
                                                [Object.keys(stateValueFromChild)[19]]: Object.values(stateValueFromChild)[19],
      })
    };

    return (
        <div crossorigin src="...">
          <div class="search-return-title">
            <p id="name-results"> Search Results: Castlevania </p>
            <p id="num-results"> {data.length} results </p>
          </div>
          <div class="grid-container">
            <FilterContainer data={data} changeState={(stateValueFromChild) => changeState(stateValueFromChild)}/>
            <SearchResultGrid data={data} newState={state}/>
          </div>
        </div>
    )
};
