import React from 'react';
import Cookies from 'universal-cookie';
import { Route } from 'react-router-dom';
import { Auth } from "aws-amplify";

class ContentFive extends React.Component {
  
  constructor(props)  {
    super(props)
    this.state = {
      isRedirectLoading: true,
      isAuthLoading: true,
      cognitoId: ""
    }
  }

  setRedirectLoading(bool){
    this.setState({
      isRedirectLoading: bool
    })
  }

  setAuthLoading(bool){
    this.setState({
      isAuthLoading: bool
    })
  }

  setCognitoId(id){
    this.setState({
      cognitoId: id
    })
  }

  async getRedirect(){

          const rand = (Math.random()).toString()
          const session = rand.substring(0, rand.length-2)
          console.log(this.props.state)
          //this.props.updateResponse(null,)
          this.props.state.cookie.set('session', session, { path: '/signup' });
    
          fetch('https://e51gjov0i4.execute-api.us-east-1.amazonaws.com/qa/stripe', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              cookie: this.props.state.cookie,
              information: {
                  'username': this.props.state.username,
                  'firstName': this.props.state.firstName,
                  'lastName': this.props.state.lastName,
                  'email': this.props.state.email,
                  'country': 'US'
              }
            }),
          }
          )
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.props.updateResponse(res);
            return res;
          })
          .catch(err => {
            console.log(err);
          })

  }

  async userCognitoSignup(){
    try {
      const { newUser } = Auth.signUp({
        username: this.props.state.email,
        password: this.props.state.password,
        attributes: {
          email: this.props.state.email // optional
        }
      }).then(res => {
          console.log(res)
          this.setCognitoId(res.userSub);
      })
    } catch (e) {
      //onError(e);
      //setIsLoading(false);
    }
    
  }

  async registerUser(){

    const data = {

      DynamicState: this.props.state.DynamicState,
      full_time: this.props.state.full_time,
      years_artist: this.props.state.years_artist,
      country: this.props.state.country,
      state: this.props.state.state,
      personal_website: this.props.state.personal_website,
      username: this.props.state.username,
      first_name: this.props.state.first_name,
      last_name: this.props.state.last_name,
      company_name: this.props.state.company_name,
      language: this.props.state.language,
      will_not_draw: this.props.state.will_not_draw,
      email: this.props.state.email,
      birth_date: new Date('2014-08-18T21:11:54'),
      phone_number: this.props.state.phone_number,
      cognitoId: this.state.cognitoId

    };

    fetch('https://e51gjov0i4.execute-api.us-east-1.amazonaws.com/qa/signup', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        //'Authorization': this.props.user
    },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      })
  
  }

  componentDidMount(prevProps){
      // calculate session token first  &  save as cookie
    this.userCognitoSignup();
    this.registerUser();

  }

    render() {
      //TODO send out s
      console.log(this.props.state)
      if (this.props.state.stripeReady === false){
        console.log("Stripe not ready -- is null")
        return null
      }
        return (
            <div className="signup-container">
              <Route path='/signup' component={() => {
                  console.log(this.props.state.stripeReady)
                  window.location.replace(this.props.state.stripeReady);
                  return null;
              }}/>
                <br></br>
            </div>
        )
    }
}

export default ContentFive;