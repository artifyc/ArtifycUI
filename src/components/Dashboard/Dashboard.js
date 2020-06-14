import React from 'react';
import '../../style/HomePage.css'
import Board from '@lourenci/react-kanban'

class Dashboard extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
        currUser: this.props.user,
        board: null,
        checked: []
      };
      console.log(this.props.currUser);
    }

  componentDidUpdate(prevProps){
    //TODO: Add if not logged in logic here
    if (this.props.currUser !== prevProps.currUser) {
        this.setState ({
          currUser: this.props.currUser,
          checked: 1
        });

      //console.log('sending thing');
      //console.log(this.props.currUser);
      //console.log(this.props.currUser.signInUserSession.idToken.jwtToken);

      fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': this.props.currUser.signInUserSession.idToken.jwtToken
          },
        })
          .then(res => res.json())
          .then((res) => {
            this.setState ({ board: res.board.columns.board });
          })
    }
    
  }

    render() {
      //TODO some loading animation?
      if (this.state.board == null){
        return null
      }
        return (
            <div>
                <Board initialBoard={this.state.board} />
            </div>
        )
    }
}

export default Dashboard;