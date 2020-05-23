import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function CommissionInfo(props)  {
  const handleChange = props.handleChange
  return(
    <div className="signup-container">
      <div>
          <h2>Commission Information</h2>
          <div className="form-group">
            <TextField label="Some Other Thing:"  id="other_thing"
                  name="other_thing" placeholder="other thing"
                  onChange={handleChange} value={props.state.other_thing}
            />
          </div>
      </div>
    </div>
  )
}