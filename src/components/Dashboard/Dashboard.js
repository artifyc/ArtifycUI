import React from 'react';
import '../../style/HomePage.css'
import Board from '@lourenci/react-kanban'
import '../../style/dashboard.css'
import '../../style/App.css'

class Dashboard extends React.Component {

  constructor(props) {
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
          newBoard: board
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

  componentDidUpdate(prevProps) {
    //TODO: Add if not logged in logic here
    if (this.props.currUser !== prevProps.currUser) {
      this.setState({
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
        .then((res) => {

          this.setState({board: res.board.columns});
        })
    }

  }

  render() {
    if (this.state.board == null) {
      return (
        <div className="loading-container">
          <img className="loading-gif" src={require("../../assets/loading_brush.gif")}/>
        </div>
      )
    }
    return (
      <div className="content-container">
        <h2 className="text">{this.state.messages[Math.floor(Math.random() * this.state.messages.length)]}</h2>
        <div className="kanban-container">
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
            allowAddCard={{on: "top"}}
            onNewCardConfirm={draftCard => ({
              id: new Date().getTime(),
              ...draftCard
            })}
            onCardNew={this.makePutCall}
          />
        </div>
      </div>
    )
  }
}

export default Dashboard;