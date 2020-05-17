import React from 'react';
// import BasicInfo from './BasicInfo';
// import CommissionInfo from './CommissionInfo';
// import GalleryPreference from './GalleryPreference';
import StepperDemo from './Stepper'

class SignUpParentForm extends React.Component {
    constructor(props) {
      super(props)
      // Set the initial input values
      this.state = {
        full_time: "full-time",
        years_artist: 0,
        country: 'United States',
        state: '',
        personal_website: 'www.example.com',
        username: '',
        password: '', 
        first_name: 'Alex',
        last_name: 'Smith',
        company_name: '',
        language: 'English',
        concurrent_commissions: 0,
        will_not_draw: [],
        email: 'Email Here',
        other_thing:  'heyd~de'
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
      alert(`Your registration detail: \n
        Time: ${this.state.full_time} \n 
        Years as Artist: ${this.state.years_artist} \n
        Country: ${this.state.country} \n
        Website: ${this.state.personal_website} \n
        Email: ${this.state.email} \n
        Other Thing: ${this.state.other_thing} \n
        `)
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