import React from 'react';
import TextField from '@material-ui/core/TextField';
import ArtistTypeButton from './ArtistTypeButton'
import Typography from '@material-ui/core/Typography';

class SignupCongrats extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            currUser: null,
          };
      }
/*
    // Check the `state` we got back equals the one we generated before proceeding (to protect from CSRF)
  try {
    // Post the authorization code to Stripe to complete the Express onboarding flow
    const expressAuthorized = await request.post({
      uri: config.stripe.tokenUri, 
      form: { 
        grant_type: 'authorization_code',
        client_id: config.stripe.clientId,
        client_secret: config.stripe.secretKey,
        code: req.query.code
      },
      json: true
    });

    if (expressAuthorized.error) {
      throw(expressAuthorized.error);
    }

    // Update the model and store the Stripe account ID in the datastore:
    // this Stripe account ID will be used to issue payouts to the pilot
    req.user.stripeAccountId = expressAuthorized.stripe_user_id;
    await req.user.save();

    // Redirect to the Rocket Rides dashboard
    req.flash('showBanner', 'true');
    res.redirect('/pilots/dashboard');
  } catch (err) {
    console.log('The Stripe onboarding process has not succeeded.');
    next(err);
  }
});
*/

    makePutCall(board) {
    if (req.session.state != req.query.state) {
        return res.redirect('/pilots/signup');
    }
    fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
        'Authorization': this.props.currUser.signInUserSession.idToken.jwtToken
        },
        body: JSON.stringify({
            newBoard: board
        }),
    }
    )
    .then(res => res.json())
    .then(res => {
        console.log(res);
        return res;
    })
    .catch(err => {
        console.log(err);
    })
    }

    render() {
        <Redirect to='/dashboard' user={ this.state.user }/>
        return (
            
            <div>
                <h2 className="text">Congrats! You're all signed up!</h2>
                <p>Here are instructions on how to do things...</p>
            </div>
        )
    }
    
    
}