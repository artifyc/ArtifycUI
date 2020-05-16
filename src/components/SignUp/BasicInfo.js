import React from 'react';

class BasicInfo extends React.Component {
  
    render() {
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="signup-container">
        <h2>About You</h2>
        <div className="form-group">
          <label>
            I am an artist _________
            <select name="full_time" defaultValue={this.props.full_time} onChange={this.props.handleDropdownChange}>
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="for fun">for fun</option>
            </select>
          </label>
          <br></br>
          <label htmlFor="years_artist">I have been an artist for X years: </label>
          <input
            className="form-control"
            id="years_artist"
            name="years_artist"
            type="text"
            placeholder="1"
            value={this.props.years_artist}
            onChange={this.props.handleChange}
          />
          <label htmlFor="country">Country: </label>
          <input
            className="form-control"
            id="country"
            name="country"
            type="text"
            placeholder="United States"
            value={this.props.country}
            onChange={this.props.handleChange}
          />
          <label htmlFor="personal_website">personal_website: </label>
          <input
            className="form-control"
            id="personal_website"
            name="personal_website"
            type="text"
            placeholder="mywebsite.com"
            value={this.props.personal_website}
            onChange={this.props.handleChange}
          />
        </div>
        </div>
      )
    }
  }

export default BasicInfo;