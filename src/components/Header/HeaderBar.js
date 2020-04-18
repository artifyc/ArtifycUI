import React, { useState, useEffect } from 'react';
import '../../style/HeaderBar.css'
import logo from '../../assets/logo.jpg'
import { Auth } from 'aws-amplify';
import { Route, Switch, Link, Redirect, Router } from "react-router-dom";
import history from '../History/history'

import Dashboard from '../Dashboard/Dashboard';
import HomePage from '../HomePage/HomePage';


class HeaderBar extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
        loggedIn = false,
      };
  }

  isLoggedIn = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({bypassCache:false});
      console.log("user: " + user);
      console.log(typeof user);
      this.state.loggedIn = true;
    } catch (err) {
      this.state.loggedIn = false;
    }
  }

   PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      this.state.loggedIn == false ? <Component {...props} /> : <Redirect to='/dashboard' />
    )} />
  )

  render() {
      return (
        <div>
        <Router history={history}>
          <div>
            <div className={classes.bar}>
              <img className={classes.logo} src={logo} height={75}/>
              <Link to='/' className={classes.item} onClick={() => Auth.federatedSignIn()}>Sign In</Link>
              <Link to='/' className={classes.item} onClick={() => Auth.federatedSignIn()}>Become a Creator</Link>
            </div>
            <Switch>
              <PublicRoute exact path="/" component={HomePage} />
              <Route path="/dashboard" component={Dashboard} />
          </Switch>
         </div>
        </Router>
    </div>
      )
  }
}

export default HeaderBar;