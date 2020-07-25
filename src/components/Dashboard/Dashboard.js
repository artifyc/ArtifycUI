import React from 'react';
import '../../style/HomePage.css';
import { Spinner } from 'react-bootstrap';
import Board from '@lourenci/react-kanban';
import '../../style/dashboard.css';

class Dashboard extends React.Component {
  
  constructor(props)  {
    super(props);
    this.state = {
        currUser: this.props.user,
        messages: ["You look great today!", "Have you been drinking enough water?", "You're the yee to my haw <3", "Maybe the real art is the friends we made along the way..."],
        board: null,
        checked: []
      };
    console.log(this.props.currUser);
    this.makePutCall = this.makePutCall.bind(this);

  }

  makePutCall(board) {
      fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': this.props.currUser.signInUserSession.idToken.jwtToken
        },
        body: JSON.stringify({
          board: board
        }),
      }
      )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidUpdate(prevProps){
    //TODO: Add if not logged in logic here
    if (this.props.currUser !== prevProps.currUser) {
        this.setState ({
          currUser: this.props.currUser,
          checked: 1
        });

      //console.log('sending thing');
      console.log(this.props.currUser);
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
            console.log(res);
            this.setState ({ board: res.board.columns });
          })
    }
    
  }

    render() {
      //TODO some loading animation?
      if (this.state.board == null){
        console.log("Board state is null")
        return (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )
      }
        return (
          <div>
          <h2 className="text">{this.state.messages[Math.floor(Math.random() * this.state.messages.length)]}</h2>
          <Board
            allowRemoveLane
            allowAddColumn
            allowRenameColumn
            allowRemoveCard
            onLaneRemove={this.makePutCall}
            onCardRemove={this.makePutCall}
            onLaneRename={this.makePutCall}
            onCardDragEnd={this.makePutCall}
            onColumnDragEnd={this.makePutCall}
            initialBoard={this.state.board}
            allowAddCard={{ on: "top" }}
            onNewCardConfirm={draftCard => ({
              id: new Date().getTime(),
              ...draftCard
            })}
            onCardNew={this.makePutCall}
          />
          </div>
    
        )
    }
}

export default Dashboard;