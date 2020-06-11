import React from 'react';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/plain.css'

export default function GalleryPreference(props)  {
  const handleChange = props.handleChange
  const validateField = props.validateField

  return(
    <div className="signup-container">
      <div>
        <h2>Gallery Preferences</h2>
        <div className="form-group">
          <div> 
            <TextField label="Preferred Language"  id="preferred_language"
              name="preferred_language" placeholder="English"
              onChange={handleChange} value={props.state.preferred_language}
            />
          </div>
          <br></br>
          <div> 
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Birth Date"
                format="MM/dd/yyyy"
                value={props.state.birth_date}
                onChange={props.handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>          
          </div>
          <br></br>
          <div> 
            <TextField label="Email Address"  id="email"
              name="email" placeholder="joanne.smith@email.com"
              onChange={handleChange} value={props.state.email}
              onBlur={(e) => validateField(e)}
              error={!props.state.isEmailValid}
              helperText={props.state.isEmailValid ? ' ' : 'Please enter a valid Email'}
            />
          </div>
          <br></br>
          <div>
            <label>Phone Number
            </label>

            <PhoneInput
              country={'us'}
              value={props.state.phone_number}
              // onChange={handleChange}
              // enableAreaCodes={true}
              enableAreaCodeStretch
              // onlyCountries={['gr', 'fr', 'us']}
              preserveOrder={[ 'preferredCountries']}
              priority={{us: 0, ca: 1, uk:2}}
            />
          </div>
         
        </div>
      </div>
    </div>
  )
}