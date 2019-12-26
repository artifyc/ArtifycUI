import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import '../../style/artistPortfolio/artistPortfolioComponent.css';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import ArtistPortfolioGrid from './ArtistPortfolioGrid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ArtistSidebar from './ArtistSidebar'

export default function ArtistPortfolioComponent() {
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
      fetch("http://localhost:9000/artistPortfolio")
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
  //    open: true,

    });

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
        <ArtistSidebar data={data}/>
          <div class="grid-container2">
            <ArtistPortfolioGrid data={data} />
          </div>
        </div>
    )
};
