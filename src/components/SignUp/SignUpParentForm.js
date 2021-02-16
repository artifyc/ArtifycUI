import React from 'react';
import StepperDemo from './Stepper'
import Cookies from 'universal-cookie';

class SignUpParentForm extends React.Component {
    constructor(props) {
      super(props)
      // Set the initial input values
      
      this.state = {
        blankDynamic: { commissionId: '', minPriceId: '', maxPriceId: '', deliveryId: '', revisionsId: '', waitlistId: '', fileId: [] },
        DynamicState: ([{ commissionId: '', minPriceId: '', maxPriceId: '', deliveryId: '', revisionsId: '', waitlistId: '', fileId: [] }]),
        full_time: '',
        password: '',
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
        will_not_draw: [],
        email: '',
        isEmailValid: true,
        isYearsWorkedValid: true,
        stripeReady: false,
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
        phone_number: '',
        cookie: this.props.cookies
      }

      // Bind the submission to handleChange() 
      this.handleChange = this.handleChange.bind(this)
      this.handleDateChange = this.handleDateChange.bind(this)
      this.validateField = this.validateField.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleCheckChange = this.handleCheckChange.bind(this)
      this.handlePhoneChange = this.handlePhoneChange.bind(this)
      this.handleDynamicChange = this.handleDynamicChange.bind(this)
      this.handleRemoveDynamicFields = this.handleRemoveDynamicFields.bind(this)
      this.setDynamicState = this.setDynamicState.bind(this)
      this.addDynamic = this.addDynamic.bind(this)
      this.updateResponse = this.updateResponse.bind(this)
      this.handleDynamicFileChange = this.handleDynamicFileChange.bind(this)

    }
    
    componentDidUpdate() {
      //for debugging
      //console.log(this.state.DynamicState)

    }

    updateResponse(url) {
      this.setState ({
        stripeReady: url
      })
    }

    setDynamicState(updatedDynamics) { 
      this.setState ({
        DynamicState: updatedDynamics
      })
    }

    addDynamic(){ 
      this.setState ({
        DynamicState: ([{...this.state.blankDynamic}, ...this.state.DynamicState ])
      })
    }

    // Use the submitted data to set the state
    handleChange(event) {
      //console.log("change event", event)
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

   handleDynamicChange(e) {
    const updatedDynamics = [...this.state.DynamicState];
    updatedDynamics[e.target.dataset.idx][e.target.id] = e.target.value;
    this.setDynamicState(updatedDynamics);
  };

  /**
    * handleDynamicFileChange
    * @desc opens a modal window to display a message
    * @param string $msg - the message to be displayed
    * @return bool - success or failure
*/

  handleDynamicFileChange(e, idx, isAdd=true) {
    console.log("handleDynamicFileChange Entered")
    const updatedDynamics = [...this.state.DynamicState];
    if (!isAdd){
      const guiltyIndex = updatedDynamics[idx]['fileId'].findIndex(element => element.name === e.name)
      //console.log("guilyIndex: " + guiltyIndex);
      updatedDynamics[idx]['fileId'].splice(guiltyIndex, 1);
    } else {
      //console.log("else entered")
      updatedDynamics[idx]['fileId'].push(e.target.files[0]);
    }
    //handling for file upload array
    this.setDynamicState(updatedDynamics);
    //console.log(updatedDynamics);
  };
  
  handleRemoveDynamicFields = index => {
    const updatedDynamics = [...this.state.DynamicState];
    updatedDynamics.splice(index, 1);
    this.setDynamicState(updatedDynamics);
  };
   

    // Trigger an alert on form submission
    handleSubmit = (event) => {
      // event.preventDefault()
      this.setState({
        allFieldsValidated: true
      })
      Object.keys(this.state.validationFields).map((field) => {
        const fieldValue = this.state[this.state.validationFields[field]["validationFieldName"]]
        if (!fieldValue && this.state[field] !== '') {
          this.setState({
            allFieldsValidated: false
          })
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
      const data = {
        email: this.state.email,
        firstName: this.state.first,
        lastName: this.state.last,
        interest: this.state.value,
        message: this.state.message
    };

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
            handleDynamicChange={this.handleDynamicChange}
            handleRemoveDynamicFields={this.handleRemoveDynamicFields}
            handleDynamicFileChange={this.handleDynamicFileChange}
            addDynamic={this.addDynamic}
            setDynamicState={this.setDynamicState}
            handleSubmit={this.handleSubmit}
            updateResponse={this.updateResponse}
            validateField={this.validateField}
            handleDateChange={this.handleDateChange}
            handleCheckChange={this.handleCheckChange}
            handlePhoneChange={this.handlePhoneChange}
            setCookies={this.props.setCookies}
          />
        </div>
      )
    }
  }

export default SignUpParentForm;