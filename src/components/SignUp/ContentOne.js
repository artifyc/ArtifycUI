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


export default function BasicInfo(props)  {
  const [setMenuItem] = React.useState(props.state);
  const handleMenuChange = (event) => {
    setMenuItem(event.target.value);
    handleChange(event)
  };      
  const handleChange = props.handleChange
  console.log(props.state)

      return(
        <div className="signup-container">
          <h2>About You</h2>
          <div className="form-group">
            
            <TextField 
              size="medium"
              id="full_time"
              select
              name="full_time"
              label="I am an Artist"
              value={props.state.full_time}
              helperText="Please Select One"
              onChange={handleMenuChange}
            >
              {
                menuMappings.map((option) => (
                <MenuItem key={option.value} value={option.value} >
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
              placeholder={props.state.years_artist}
              onChange={handleChange}
            />
            <label htmlFor="country">Country: </label>
            <input
              className="form-control"
              id="country"
              name="country"
              type="text"
              placeholder={props.state.country}
              onChange={handleChange}
            />
            <label htmlFor="personal_website">personal_website: </label>
            <input
              className="form-control"
              id="personal_website"
              name="personal_website"
              type="text"
              placeholder={props.state.personal_website}
              onChange={handleChange}
            />
          </div>
        </div>
      )
  }