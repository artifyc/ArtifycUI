import React from 'react';
import TextField from '@material-ui/core/TextField';
import ArtistTypeButton from './ArtistTypeButton'
import Typography from '@material-ui/core/Typography';

export default function PaymentInfo(props)  {
  const handleChange = props.handleChange
  const validateField = props.validateField

      return(
        <div className="signup-container">
          <h2>Payment Info</h2>
          <div  className="form-group">
            <div>
              <TextField label="Credito Info"  id="credit_info"
                name="credit_info" placeholder="www.mycreditoinfo.com" 
                onChange={handleChange} value={props.state.credit_info}
               />
            </div>
            <br></br>
          </div>
        </div>
      )
  }