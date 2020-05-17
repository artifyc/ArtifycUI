import React from 'react';
import '../../style/HomePage.css'
import Board from '@lourenci/react-kanban'

const board = {
  "columns":
[{"id":69,
"title":"Backlog",
"cards":[
    {"id":1,"title":"Add card","description":"Ellery was here bitches"}]},
    {"id":2,"title":"Doing","cards":[{"id":2,"title":"Drag-n-drop support","description":"AWS IS MY BITCH!!"}]}]}

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
    if (this.props.currUser !== prevProps.currUser) {
        this.setState ({
          currUser: this.props.currUser,
          checked: 1
        });

      console.log('sending thing');
      console.log(this.props.currUser);
      console.log(this.props.currUser.signInUserSession.idToken.jwtToken);

      fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': this.props.currUser.signInUserSession.idToken.jwtToken
          },
        })
          .then(res => res.json())
          .then(res => console.log(res.columns.columns.board.columns))
          //.then(res => this.props.board = res.columns.columns.board.columns)
    }

    if (this.props.board !== prevProps.board) {
        this.setState ({
          currUser: this.props.currUser,
          board: this.props.board,
          checked: 1
        });

        console.log("New board:");
        console.log(this.state.board);
      }
    
  }

    render() {
        return (
            <div>
                <Board initialBoard={board} />
            </div>
        )
    }
}

export default Dashboard;