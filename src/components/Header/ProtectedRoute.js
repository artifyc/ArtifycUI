import React from 'react';
import '../../style/HeaderBar.css'
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {

    constructor(props)  {
    super(props);
    console.log(props);
    this.state = {
        loggedIn: this.props.isLoggedIn,
        currUser: this.props.currUser,
        checked: []
      };
  }

  componentDidUpdate(prevProps) {
    if (this.props.currUser !== prevProps.user) {
      this.setState ({
        loggedIn: true,
        currUser: this.props.currUser,
        checked: 1
      })
    }
  }

  render() {
    if(!this.state.checked) return null;
    const { component: Component, ...props } = this.props
    
    return (

      <Route 
        {...props} 
        render={props => (
          this.state.loggedIn ?
            <Redirect to='/dashboard' user={ this.state.user }/> :
            <Component {...props} />
        )} 
      />
    )
  }
}

export default ProtectedRoute;