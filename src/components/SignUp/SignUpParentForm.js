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
        allFieldsValidated: true
      }
      // Bind the submission to handleChange() 
      this.handleChange = this.handleChange.bind(this)
      this.validateField = this.validateField.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

    }

    // Use the submitted data to set the state
    handleChange(event) {
      const target = event.target;
      const name = target.name;
      this.setState({
        [name]: target.value
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
      Object.keys(this.state.validationFields).map((field) => {
        const fieldValue = this.state[this.state.validationFields[field]["validationFieldName"]]
        if (!this.state[this.state.validationFields[field]["validationFieldName"]]) {
          this.state.allFieldsValidated = false
          // this.setState({
          //   allFieldsValidated: false
          // })
        }   
      })
      console.log("All Fields Validated: ", this.state.allFieldsValidated)
      if (!this.state.allFieldsValidated) {
        alert("Please correct fields")
      }
    }
    
    render() {    
      return (
        <div>
          <StepperDemo 
            state={this.state} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            validateField={this.validateField}
          />
        </div>
      )
    }
  }

export default SignUpParentForm;