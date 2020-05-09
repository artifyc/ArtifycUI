import React from 'react';
import '../../style/HeaderBar.css'
import { Auth } from 'aws-amplify';
import { Route, Switch, Link, Router } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import history from '../History/history'

import logo from '../../assets/logo.jpg'
import user from '../../assets/user-default.jpg'

import Dashboard from '../Dashboard/Dashboard';
import SignUpParentForm from '../SignUp/SignUpParentForm';
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
    this.loggedInView();
  }

  isLoggedIn = async () => {
    try {
        const user = await Auth.currentAuthenticatedUser({bypassCache:false});
        //const token = user.signInUserSession.idToken.jwtToken;
        //console.log(token);
        this.setState ({
          loggedIn: true,
          currUser: user,
          checked: 1
        })
        //console.log(this.state.currUser);
    } catch (err) {
        this.setState ({
          loggedIn: false,
          currUser: null,
          checked: 1
        })
    }
  }

  loggedInView() {
    return this.state.loggedIn ?
      <div>
        <div className="bar">
          <img alt="logo" className="logo" src={logo} height={75}/>
          <img alt="user-img" className="icon" src={user} height={90}/>
          <Link to='/settings' className="item">Account</Link>
        </div>
        <Switch>
          <ProtectedRoute exact path='/' loggedIn={ this.state.loggedIn } currUser={ this.state.currUser } component={HomePage} />
          <Route path="/dashboard" render={(props) => <Dashboard {...props} currUser={ this.state.currUser} />} />
          <Route path="/settings" component={Dashboard} currUser={ this.state.currUser} />
        </Switch>
      </div>

      :

      <div>
      <div className="bar">
        <img alt="logo "className="logo" src={logo} height={75}/>
        <Link to='/' className="item" onClick={() => Auth.federatedSignIn()}>Sign In</Link>
        <Link to='/signup' className="item">Become a Creator</Link>
      </div>
      <Switch>
        <ProtectedRoute exact path='/' loggedIn={ this.state.loggedIn } currUser={ this.state.currUser } component={HomePage} />
        <Route path="/signup" component={SignUpParentForm} />
        <Route path="/dashboard" component={Dashboard} user={ this.state.user} />
      </Switch>
    </div>

  }

  render() {
      return (
        <div>
        <Router history={history}>
          {this.loggedInView()}
        </Router>
    </div>
      )
  }
}

export default HeaderBar;