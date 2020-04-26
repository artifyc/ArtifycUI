import React from 'react';

class MasterForm extends React.Component {
    constructor(props) {
      super(props)
      // Set the initial input values
      this.state = {
        currentStep: 1, // Default is Step 1
        username: '',
        password: '', 
        first_name: '',
        last_name: '',
        country: '',
        years_artist: 0,
        registered_company: '',
        company_name: '',
        state: '',
        language: 'English',
        concurrent_commissions: 0,

      }
      // Bind the submission to handleChange() 
      this.handleChange = this.handleChange.bind(this)
    }
  
    // Use the submitted data to set the state
    handleChange(event) {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
    
    // Trigger an alert on form submission
    handleSubmit = (event) => {
      event.preventDefault()
      const { email, username, password } = this.state
      alert(`Your registration detail: \n 
        Email: ${email} \n 
        Username: ${username} \n
        Password: ${password}`)
    }
    
    // Render UI will go here...
  }