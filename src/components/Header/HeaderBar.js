import React from 'react';
import '../../style/HeaderBar.css'
import { Auth } from 'aws-amplify';
import { Route, Switch, Router } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'
import history from '../History/history'
import Dashboard from '../Dashboard/Dashboard';
import SignUpParentForm from '../SignUp/SignUpParentForm';
import HomePage from '../HomePage/homePage';
import AccountOptionsComponent from '../AccountOptions/AccountOptionsComponent';
import NavBarComponent from './NavBarComponent'
import FooterBar from '../Footer/footer'
import Messenger from "../Messages/Messenger";
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
    //console.log("component did mount");
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
        <div><NavBarComponent loggedIn={this.state.loggedIn}/></div>
        <Switch>
          <ProtectedRoute exact path='/' loggedIn={ this.state.loggedIn } currUser={ this.state.currUser } component={HomePage} />
          <Route path="/dashboard" render={(props) => <Dashboard {...props} currUser={ this.state.currUser} />} />
          <Route path="/settings" component={AccountOptionsComponent}/>
          <Route path="/Messages" render={(props) => <Messenger {...props} currUser={this.state.currUser}/>}/>
        </Switch>
        <footer><FooterBar/></footer>
      </div>

      :

      <div>
        <div><NavBarComponent loggedIn={this.state.loggedIn}/></div>
        <Switch>
          <ProtectedRoute exact path='/' loggedIn={ this.state.loggedIn } currUser={ this.state.currUser } component={HomePage} />
          <Route path="/signup" component={SignUpParentForm} />
          <Route path="/dashboard" component={Dashboard} user={ this.state.user} />
        </Switch>
        <footer><FooterBar/></footer>
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