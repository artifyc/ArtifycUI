import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';


export default function NotificationPreferences(props)  {
  const handleCheckChange = props.handleCheckChange
  return(
    <div className="signup-container">
      <div>
          <h2>Notification Preferences</h2>
          <h3 >
            <Typography>Notify me via:</Typography>
          </h3>
          <div  style={{ textAlign: 'center' }}>
            <div  style={{display: "inline-block", textAlign: 'left'}}>
              <FormControlLabel
              control={
                <Checkbox
                  checked={props.state.checkedNotifyEmail}
                  onChange={handleCheckChange}
                  name="checkedNotifyEmail"
                  id="checkedNotifyEmail"
                  color="primary"
                />
              }
              label="Email"
              />
            </div>    
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.state.checkedNotifyText}
                  onChange={handleCheckChange}
                  name="checkedNotifyText"
                  id="checkedNotifyText"
                  color="primary"
                />
              }
              label="Text (999-999-9999)"
            />
          </div>  
          <h3 >
            <Typography>Contact me when:</Typography>
          </h3>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.state.checkedNotifyNewCommission}
                  onChange={handleCheckChange}
                  name="checkedNotifyNewCommission"
                  id="checkedNotifyNewCommission"
                  color="primary"
                />
              }
              label="I receive a new commission request"
            />
          </div>  
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.state.checkedNotifyNewMsg}
                  onChange={handleCheckChange}
                  name="checkedNotifyNewMsg"
                  id="checkedNotifyNewMsg"
                  color="primary"
                />
              }
              label="I am sent a new message"
            />
          </div>  
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.state.checkedNotifyRevision}
                  onChange={handleCheckChange}
                  name="checkedNotifyRevision"
                  id="checkedNotifyRevision"
                  color="primary"
                />
              }
              label="I have a new revision request"
            />
          </div>  
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.state.checkedNotifyReview}
                  onChange={handleCheckChange}
                  name="checkedNotifyReview"
                  id="checkedNotifyReview"
                  color="primary"
                />
              }
              label="I receive a new review"
            />
          </div>  
      </div>
    </div>
  )
}