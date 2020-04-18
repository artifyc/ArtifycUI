import React, { Component } from 'react';
import '../../style/HeaderBar.css'
import { Auth } from 'aws-amplify';
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {

    constructor(props)  {
    super(props);
    this.state = {
        loggedIn: '',
        currUser: '',
        run: []
      };
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  isLoggedIn = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser({bypassCache:false});
        this.setState ({
          loggedIn: true,
          currUser: user,
          run: 1
        })
        console.log(this.state.currUser);
    } catch (err) {
        this.setState ({
          loggedIn: false,
          currUser: null,
          run: 1
        })
    }
  }

  render() {

    if(!this.state.run) return null;

    const { component: Component, ...props } = this.props
    console.log(this.state.loggedIn);
    console.log(this.state.user);

    return (

      <Route 
        {...props} 
        render={props => (
          this.state.loggedIn ?
            <Redirect to='/dashboard' /> :
            <Component {...props} />
        )} 
      />
    )
  }
}

export default ProtectedRoute;