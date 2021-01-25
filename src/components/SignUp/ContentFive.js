import React from 'react';
import TextField from '@material-ui/core/TextField';
import Cookies from 'universal-cookie';
import { Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class ContentFive extends React.Component {
  
  constructor(props)  {
    super(props);
    this.state = {
      stripeReady: false
      };
    this.updateResponse = this.updateResponse.bind(this);

  }

  componentDidMount(prevProps){
      // calculate session token first  &  save as cookie

      const rand = (Math.random()).toString()
      const session = rand.substring(0, rand.length-2)

      const cookies = new Cookies();
      cookies.set('session', session, { path: '/signup' });

      fetch('https://e51gjov0i4.execute-api.us-east-1.amazonaws.com/qa/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          cookie: cookies,
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
        this.updateResponse(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      })

  }

  updateResponse(url) {
    this.setState ({
      stripeReady: url
    })
  }

    render() {
      //TODO some loading animation?
      if (this.state.stripeReady === false){
        console.log("Stripe not ready -- is null")
        return null
      }
        return (
            <div className="signup-container">
              <h2>Payment Info</h2>
              <div className="form-group">
              <Route path='/signup' component={() => {
                  console.log(this.state.stripeReady)
                  window.location.replace(this.state.stripeReady);
                  return null;
              }}/>
                <br></br>
              </div>
            </div>
        )
    }
}

export default ContentFive;