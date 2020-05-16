import React from 'react';

class CommissionInfo extends React.Component {
    render() {
      return(
        <div className="signup-container">
          <div>
              <h2>Commission Information</h2>
              <div className="form-group">
              <label htmlFor="email">Some other thing</label>
              <input
                  className="form-control"
                  id="other_thing"
                  name="other_thing"
                  type="text"
                  placeholder={this.props.state.other_thing} 
                  onChange={this.props.handleChange} 
              />
              </div>
          </div>
        </div>
      )
    }
  }

export default CommissionInfo;