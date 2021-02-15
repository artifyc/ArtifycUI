import React from 'react';
import Dropdown from '../Deprecated/dropdown'
import '../../style/HomePage.css'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      message: '',
      show: false,
      font: '',
      thanks: false,
      value: 'Becoming a founding artist'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleChange = (font) => () => {
    this.setState({value: font, show: false});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    const data = {
      email: this.state.email,
      firstName: this.state.first,
      lastName: this.state.last,
      interest: this.state.value,
      message: this.state.message
    };

    fetch('https://nqga4cwr46.execute-api.us-east-1.amazonaws.com/prod', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': this.props.user
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => console.log(res))
    this.setState({first: '', last: '', email: '', value: 'Becoming a founding artist', show: false, message: '', thanks: true});
  }

  handleToggle = (e) => {
    e.target.focus();
    this.setState({show: !this.state.show});
  }

  handleBlur = (e) => {
    // firefox onBlur issue workaround
    if (e.nativeEvent.explicitOriginalTarget &&
      e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
      return;
    }

    if (this.state.show) {
      setTimeout(() => {
        this.setState({show: false});
      }, 200);
    }
  }

  render() {
    return (
      <div id="form-section">
        <div><h3 id="how-it-works-header">sign up for the beta:</h3></div>
        <form id="form-top" onSubmit={this.handleSubmit}>
          <div className="name-section">
            <label className="label-padding">
              First Name:<span className="word-change-red">*</span>
              <input className="input-margin" onChange={this.handleInputChange} value={this.state.first} type="text" name="first"/>
            </label>
          </div>
          <div className="name-section">
            <label className="label-padding">
              Last Name:<span className="word-change-red">*</span>
              <input className="input-margin" onChange={this.handleInputChange} value={this.state.last} type="text" name="last"/>
            </label>
          </div>
          <div className="name-section">
            <label className="label-padding">
              Email:<span className="word-change-red">*</span> <span id="word-change-grey">.......</span>
              <input className="input-margin" onChange={this.handleInputChange} value={this.state.email} type="text" name="email"/>
            </label>
          </div>
          <div className="name-section">
            <label className="label-padding">
              I'm interested in:<span className="word-change-red">*</span>
              <Dropdown
                show={this.state.show}
                value={this.state.value}
                handleToggle={this.handleToggle}
                handleBlur={this.handleBlur}
                handleChange={this.handleChange}
              />
            </label>
          </div>
          <div className="name-section">
            <label className="label-padding">
              Message: <span id="word-change-grey"></span>
              <textarea className="textarea-message-margin" type="text" onChange={this.handleInputChange} value={this.state.message} name="message"/>
            </label>
          </div>
          <div>
            {this.state.thanks
              ? <div className="label-padding thanks">Thanks for signing up!</div>
              : null
            }
          </div>
          <div className="name-section">
            <input id="submit-button" type="submit" value="SIGN UP"/>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;