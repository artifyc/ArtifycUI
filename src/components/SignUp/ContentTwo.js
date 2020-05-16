import React from 'react';

class GalleryPreference extends React.Component {
    render() {
      return(
        <div className="signup-container">
          <div>
            <h2>Gallery Preferences</h2>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  placeholder={this.props.state.email} 
                  onChange={this.props.handleChange} 
              />
            </div>
          </div>
        </div>
      )
    }
  }

export default GalleryPreference;