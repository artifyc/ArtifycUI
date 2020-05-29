import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function GalleryPreference(props)  {
  const handleChange = props.handleChange
  const validateField = props.validateField
  const regExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return(
    <div className="signup-container">
      <div>
        <h2>Gallery Preferences</h2>
        <div className="form-group">
          <div> 
            <TextField label="Email Address"  id="email"
              name="email" placeholder="joanne.smith@email.com"
              onChange={handleChange} value={props.state.email}
              onBlur={(e) => validateField(e,"isEmailValid", regExpression)}
              error={!props.state.isEmailValid}
              helperText={props.state.isEmailValid ? ' ' : 'Please enter a valid Email'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}