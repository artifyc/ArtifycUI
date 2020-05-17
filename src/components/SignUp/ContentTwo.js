import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function GalleryPreference(props)  {
  const handleChange = props.handleChange
  return(
    <div className="signup-container">
      <div>
        <h2>Gallery Preferences</h2>
        <div className="form-group">
          <div> 
            <TextField label="Email Address"  id="email"
              name="email" placeholder="joanne.smith@email.com"
              onChange={handleChange} value={props.state.email}
            />
          </div>
        </div>
      </div>
    </div>
  )
}