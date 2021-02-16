import React from 'react';
import '../../style/HeaderBar.css'
import { Auth } from 'aws-amplify';
import { Route, Switch, Router } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import history from '../History/history';
import Dashboard from '../Dashboard/Dashboard';
import SignUpParentForm from '../SignUp/SignUpParentForm';
import HomePage from '../HomePage/homePage';
import AccountOptionsComponent from '../AccountOptions/AccountOptionsComponent';
import NavBarComponent from './NavBarComponent';
import SignupCongrats from '../SignUp/SignupCongrats';
import FooterBar from '../Footer/footer';
import Cookies from 'universal-cookie';
class HeaderBar extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
        cookies: new Cookies(),
        loggedIn: '',
        currUser: '',
        checked: []
      };
    this.setCookies = this.setCookies.bind(this)
    //this.state.cookies.set('myCat', 'Pacman', { path: '/' });
    //console.log(this.state.cookies.get('myCat'))
  }

  componentDidMount() {
    //console.log("component did mount");
    this.isLoggedIn();
    this.loggedInView();
  }

  setCookies(name, value, pathPassed) {
    console.log("set cookies entered")
    this.state.cookies.set(name, value, { path: pathPassed });
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
          <Route path="/signupCongrats" render={(props) => <SignupCongrats {...props} cookies={ this.state.cookies } setCookies={this.setCookies}/>} />
        </Switch>
        <footer><FooterBar/></footer>
      </div>

      :

      <div>
        <div><NavBarComponent loggedIn={this.state.loggedIn}/></div>
        <Switch>
          <ProtectedRoute exact path='/' loggedIn={ this.state.loggedIn } currUser={ this.state.currUser } component={HomePage} />
          <Route path="/signup" render={(props) => <SignUpParentForm {...props} cookies={ this.state.cookies } setCookies={this.setCookies} />} />
          <Route path="/signupCongrats" render={(props) => <SignupCongrats {...props} cookies={ this.state.cookies } setCookies={this.setCookies}/>} />
          <Route path="/dashboard" component={Dashboard} user={ this.state.user } />
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