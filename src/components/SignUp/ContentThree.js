import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default function NotificationPreferences(props)  {
  const handleCheckChange = props.handleCheckChange
  return(
    <div className="signup-container">
          <h2 >Notification Preferences</h2>
          <div className="form-group">
            <br></br>
            <h3>
              <Typography component="div">
                <Box fontWeight="fontWeightBold" >
                Notify me via:
                </Box>
              </Typography>
            </h3>
            <div >
              <div>
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
            <div m={1}>
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
            <h3>
              <Typography component="div">
                <Box fontWeight="fontWeightBold" >
                Contact me when:
                </Box>
              </Typography>
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