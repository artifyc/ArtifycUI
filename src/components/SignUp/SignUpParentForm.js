import React from 'react';
import StepperDemo from './Stepper'

class SignUpParentForm extends React.Component {
    constructor(props) {
      super(props)
      // Set the initial input values
      this.state = {
        full_time: '',
        years_artist: '',
        country: '',
        state: '',
        personal_website: '',
        username: '',
        password: '', 
        first_name: '',
        last_name: '',
        company_name: '',
        language: '',
        concurrent_commissions: '',
        will_not_draw: [],
        email: '',
        other_thing:  '',
        other_thing2:  '',
        formFields: []
      }
      // Bind the submission to handleChange() 
      this.handleChange = this.handleChange.bind(this)
    }

    // Use the submitted data to set the state
    handleChange(event) {
      const target = event.target;
      const name = target.name;
      this.setState({
        [name]: target.value
      })    
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
      // event.preventDefault()
      console.log(this.state)
    }
    
    render() {    
      return (
        <div>
          <StepperDemo 
            state={this.state} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    }
  }

export default SignUpParentForm;