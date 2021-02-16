import React from 'react';
import Cookies from 'universal-cookie';


class SignupCongrats extends React.Component {
    constructor(props)  {
        super(props);
        console.log(props);
        this.state = {
          cookies: this.props.cookies
        };
        
      }

    render() {
      //console.log(this.props.cookies.getAll())
        return (
            <div>
                <h2 className="text">Congrats! You're all signed up!</h2>
                <p>Here are instructions on how to do things...</p>
            </div>
        )
    }
    
    
}

export default SignupCongrats;