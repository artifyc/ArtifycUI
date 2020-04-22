import React from 'react';
import '../../style/HeaderBar.css'
import logo from '../../assets/logo.jpg'
import { Auth } from 'aws-amplify';
import { Route, Switch, Link, Router } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import history from '../History/history'

import Dashboard from '../Dashboard/Dashboard';
import HomePage from '../HomePage/HomePage';

class HeaderBar extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
        loggedIn: '',
        currUser: '',
        checked: []
      };
  }

  componentDidMount() {
    console.log("component did mount");
    this.isLoggedIn();
  }

  isLoggedIn = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser({bypassCache:false});
        this.setState ({
          loggedIn: true,
          currUser: user,
          checked: 1
        })
        console.log(this.state.currUser);
    } catch (err) {
        this.setState ({
          loggedIn: false,
          currUser: null,
          checked: 1
        })
    }
  }

  render() {
      return (
        <div>
        <Router history={history}>
          <div>
            <div className="bar">
              <img alt="logo "className="logo" src={logo} height={75}/>
              <Link to='/' className="item" onClick={() => Auth.federatedSignIn()}>Sign In</Link>
              <Link to='/' className="item">Become a Creator</Link>
            </div>
            <Switch>
              <ProtectedRoute exact path='/' loggedIn={ this.state.loggedIn } currUser={ this.state.currUser } component={HomePage} />
              <Route path="/dashboard" component={Dashboard} user={ this.state.user} />
          </Switch>
         </div>
        </Router>
    </div>
      )
  }
}

export default HeaderBar;