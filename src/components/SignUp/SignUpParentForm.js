import React from 'react';
import BasicInfo from './BasicInfo';
import CommissionInfo from './CommissionInfo';
import GalleryPreference from './GalleryPreference';
import StepperDemo from './Stepper'

class SignUpParentForm extends React.Component {
    constructor(props) {
      super(props)
      // Set the initial input values
      this.state = {
        currentStep: 1, // Default is Step 1
        full_time: "full-time",
        years_artist: 0,
        country: '',
        state: '',
        personal_website: '',
        username: '',
        password: '', 
        first_name: '',
        last_name: '',
        company_name: '',
        language: 'English',
        concurrent_commissions: 0,
        will_not_draw: [],
      }
      
      // Bind the submission to handleChange() 
      this.handleChange = this.handleChange.bind(this)
      
      // Bind new functions for next and previous
      this._next = this._next.bind(this)
      this._prev = this._prev.bind(this)
    }

    _next() {
      let currentStep = this.state.currentStep
      // If the current step is 1 or 2, then add one on "next" button click
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev() {
      let currentStep = this.state.currentStep
      // If the current step is 2 or 3, then subtract one on "previous" button click
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
    // Use the submitted data to set the state
    handleChange(event) {
      const target = event.target;
      const name = target.name;

      this.setState({
        [name]: target.value
      })    
    }

    get previousButton(){
      let currentStep = this.state.currentStep;
      // If the current step is not 1, then render the "previous" button
      if(currentStep !==1){
        return (
          <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Previous
          </button>
        )
      }
      // ...else return nothing
      return null;
    }
    
    get nextButton(){
      let currentStep = this.state.currentStep;
      // If the current step is not 3, then render the "next" button
      if(currentStep <3){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
          Next
          </button>        
        )
      }
      // ...else render nothing
      return null;
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
    
    render() {    
      return (
        <React.Fragment>
          
        <form onSubmit={this.handleSubmit}>
  
          <BasicInfo
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            handleDropdownChange={this.handleDropdownChange}
            full_time={this.state.full_time}
            years_artist={this.state.years_artist}
            country={this.state.country}
            state={this.state.state}
            website={this.state.website}
          />
          <GalleryPreference
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <CommissionInfo
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />       

          {this.previousButton}
          {this.nextButton}
      
        </form>
        <div><StepperDemo/></div>
        </React.Fragment>
      )
      }
  }

export default SignUpParentForm;