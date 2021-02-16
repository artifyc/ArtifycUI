import React from 'react';
import TextField from '@material-ui/core/TextField';
import ArtistTypeButton from './ArtistTypeButton'
import Typography from '@material-ui/core/Typography';

export default function BasicInfo(props)  {
  const handleChange = props.handleChange
  const validateField = props.validateField

      return(
        <div className="signup-container">
          <h2>About You</h2>
          <div  className="form-group">
            <br></br>
            <div>
              <TextField label="First Name"  id="first_name"
                name="first_name" placeholder="" 
                onChange={handleChange} value={props.state.first_name}
               />
            </div>
            <br></br>
            <div>
              <TextField label="Last Name"  id="last_name"
                name="last_name" placeholder="" 
                onChange={handleChange} value={props.state.last_name}
               />
            </div>
            <br></br>
            <div>
              <TextField label="User Name"  id="username"
                name="username" placeholder="" 
                onChange={handleChange} value={props.state.username}
               />
            </div>
            <br></br>
            <div>
              <TextField label="Password"  id="password"
                name="password" placeholder="" type="password"
                onChange={handleChange} value={props.state.password}
               />
            </div>
            <br></br>
            <div> 
              <TextField label="Years as an artist"  id="years_artist_id"
                name="years_artist" placeholder="1" 
                onChange={handleChange} value={props.state.years_artist}
                type="number"
                onBlur={(e) => validateField(e)}
                error={!props.state.isYearsWorkedValid}
                helperText={props.state.isYearsWorkedValid ? '' : 'Please enter a valid Number'}
               />
            </div>
            <br></br>
            <div>
              <TextField label="Country (required)"  id="country_id"
                name="country" placeholder="United States" 
                onChange={handleChange} value={props.state.country}
                inputProps={{ pattern: "[a-z]" }}
               />
            </div>
            <br></br>
            <div>
              <TextField label="Personal Website"  id="personal_website_id"
                name="personal_website" placeholder="www.example.com" 
                onChange={handleChange} value={props.state.personal_website}
               />
            </div>
            <br></br>
            <br></br>
            <div style={{ display: 'inline-flex', alignSelf: 'center' }}>
              <div className="padmeup">
              <Typography>I am an artist - </Typography>
              </div>
              <ArtistTypeButton size="small" prefix="" item={props.state.full_time} handleChange={handleChange}></ArtistTypeButton>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      )
  }