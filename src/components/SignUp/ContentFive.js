import React from 'react';
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';
import { Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class ContentFive extends React.Component {
  
  constructor(props)  {
    super(props)
  }

  componentDidMount(prevProps){
      // calculate session token first  &  save as cookie

      // first register user

      const rand = (Math.random()).toString()
      const session = rand.substring(0, rand.length-2)
      console.log(this.props.state)
      //this.props.updateResponse(null,)
      this.props.state.cookie.set('session', session, { path: '/signup' });

      fetch('https://e51gjov0i4.execute-api.us-east-1.amazonaws.com/qa/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          cookie: this.props.state.cookie,
          information: {
              'username': 'test123',
              'firstName': 'Ellery',
              'lastName': 'Kreloff',
              'email': 'testemail123@gmail.com',
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

    render() {
      //TODO send out 
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