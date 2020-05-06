import React from 'react';

class CommissionInfo extends React.Component {
    render() {
      if (this.props.currentStep !== 3) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
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
                value={this.props.email} // Prop: The email input data
                onChange={this.props.handleChange} // Prop: Puts data into state
            />
            </div>
        </div>
      )
    }
  }

export default CommissionInfo;