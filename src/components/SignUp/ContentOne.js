import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const menuMappings = [
  {
    value: 'Full Time',
    label: 'Full Time',
  },
  {
    value: 'Part Time',
    label: 'Part Time',
  },
  {
    value: 'For Fun',
    label: 'For Fun',
  }
];


export default function BasicInfo()  {
  const [item, setMenuItem] = React.useState('null');
  const handleChange = (event) => {
    setMenuItem(event.target.value);
  };      
      return(
        <div className="signup-container">
          <h2>About You</h2>
          <div className="form-group">
            
            <TextField 
              size="medium"
              id="standard-select-Menu"
              select
              label="I am an Artist"
              value={item}
              onChange={handleChange}
              helperText="Please Select One"
            >
              {
                menuMappings.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
                ))
              }
            </TextField>
            <br></br>
            <label htmlFor="years_artist">I have been an artist for X years: </label>
            <input
              className="form-control"
              id="years_artist"
              name="years_artist"
              type="text"
              placeholder="1"
            
            />
            <label htmlFor="country">Country: </label>
            <input
              className="form-control"
              id="country"
              name="country"
              type="text"
              placeholder="United States"
              
            />
            <label htmlFor="personal_website">personal_website: </label>
            <input
              className="form-control"
              id="personal_website"
              name="personal_website"
              type="text"
              placeholder="mywebsite.com"
            />
          </div>
        </div>
      )
  }