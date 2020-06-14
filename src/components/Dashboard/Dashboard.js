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

      console.log('sending thing');
      console.log(this.props.currUser);
      console.log(this.props.currUser.signInUserSession.idToken.jwtToken);
      var fetchedBoard = {}
      fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': this.props.currUser.signInUserSession.idToken.jwtToken
          },
        })
          .then(res => res.json())
          .then(res => {
            fetchedBoard = res.board.columns;
            return fetchedBoard;
          })
          .then(fetchedBoard => {    
            if (fetchedBoard !== prevProps.board) {
              this.setState({
                currUser: this.props.currUser,
                board: fetchedBoard,
                checked: 1
              });

              console.log("New board:");
              console.log(this.state.board);
            }
          })
    }
    
  }

    render() {
      //TODO some loading animation?
      if (this.state.board == null){
        return null
      }
        return (
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
            initialBoard={board}
            allowAddCard={{ on: "top" }}
            onNewCardConfirm={draftCard => ({
              id: new Date().getTime(),
              ...draftCard
            })}
            onCardNew={this.makePutCall}
          />
    
        )
    }
}

export default Dashboard;