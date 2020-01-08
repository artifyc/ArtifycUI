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
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
        <div class="tabs">
      <Tabs value={value} onChange={handleChange}  aria-label="simple tabs example">
          <Tab label="Bust" {...a11yProps(0)} />
          <Tab label="Half body" {...a11yProps(1)} />
          <Tab label="Full body" {...a11yProps(2)} />
          <Tab label="Portrait" {...a11yProps(3)} />
        </Tabs>
      <TabPanel value={value} index={0} >
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
        </div>
          <div class="grid-container2">
          <ArtistSidebar data={data}/>

            <ArtistPortfolioGrid data={data} />
          </div>
        </div>
    )
};
