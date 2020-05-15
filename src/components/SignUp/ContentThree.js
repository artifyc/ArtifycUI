import React from 'react';

class CommissionInfo extends React.Component {
    render() {
      // The markup for the Step 1 UI
      return(
        <div className="signup-container">
          <div>
              <h2>Commission Information</h2>
              <div className="form-group">
              <label htmlFor="email">Some other thing</label>
              <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter thing"
              />
              </div>
          </div>
        </div>
      )
    }
  }

export default CommissionInfo;