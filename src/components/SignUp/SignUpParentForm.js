import React from 'react';
import StepperDemo from './Stepper'

class SignUpParentForm extends React.Component {
    constructor(props) {
      super(props)
      // Set the initial input values
      this.state = {
        isSignupComplete: false,
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
        formFields: [],
        isEmailValid: true,
        isYearsWorkedValid: true,
        validationFields: {
          "email": {
            "validationFieldName": "isEmailValid",
            "regex": /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }, 
          "years_artist": {
            "validationFieldName": "isYearsWorkedValid",
            "regex": /^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/
          }
        },
        allFieldsValidated: true,
        birth_date: new Date('2014-08-18T21:11:54'),
        preferred_language: '',
        checkedNotifyText: false,
        checkedNotifyEmail: false,
        checkedNotifyReview: false,
        checkedNotifyRevision: false,
        checkedNotifyNewMsg: false,
        checkedNotifyNewCommission: false,
        phone_number: ''
      }
      // Bind the submission to handleChange() 
      this.handleChange = this.handleChange.bind(this)
      this.handleDateChange = this.handleDateChange.bind(this)
      this.validateField = this.validateField.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleCheckChange = this.handleCheckChange.bind(this)
      this.handlePhoneChange = this.handlePhoneChange.bind(this)

    }

    // Use the submitted data to set the state
    handleChange(event) {
      console.log("change event", event)
      const target = event.target;
      const name = target.name;
      this.setState({
        [name]: target.value
      })    
    }

    handleDateChange(event) {
      this.setState({
        birth_date: event
      })    
    }

    handleCheckChange(event) {
      this.setState({
        [event.target.name]: event.target.checked
      })    
    }

    handlePhoneChange(event) {
      this.setState({
        phone_number: event
      })    
    }

    validateField(event) {
      const fieldValue = event.target.value;
      const fieldName = this.state.validationFields[event.target.name]["validationFieldName"]
      const regex = this.state.validationFields[event.target.name]["regex"]
      if (regex.test(fieldValue)) {
        this.setState({
          [fieldName]: true
        })        
      } else {
        this.setState({
          [fieldName]: false
        })    
      }
      // this.state.validationFields
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
      // event.preventDefault()
      this.setState({
        allFieldsValidated: true
      })
      Object.keys(this.state.validationFields).map((field) => {
        const fieldValue = this.state[this.state.validationFields[field]["validationFieldName"]]
        if (!fieldValue && this.state[field] !== '') {
          this.state.allFieldsValidated = false
          console.log(this.state.validationFields[field]["validationFieldName"])
          // this.setState({
          //   allFieldsValidated: false
          // })
        }
        return ""  
      } )
      if (!this.state.allFieldsValidated) {
        alert("Please correct fields")
      }
      console.log("All Fields Validated: ", this.state.allFieldsValidated)
      console.log(this.state)
    //   const data = {
    //     email: this.state.email,
    //     first_name: this.state.first_name,
    //     last_name: this.state.last_name,
    //     interest: this.state.value,
    //     message: this.state.message
    // };
      const data = this.state
      fetch('https://nqga4cwr46.execute-api.us-east-1.amazonaws.com/beta/creator-signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => console.log(res))      
    }
    
    render() {    
      return (
        <div>
          <StepperDemo 
            state={this.state} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            validateField={this.validateField}
            handleDateChange={this.handleDateChange}
            handleCheckChange={this.handleCheckChange}
            handlePhoneChange={this.handlePhoneChange}
          />
        </div>
      )
    }
  }

export default SignUpParentForm;