import React, {useEffect, useState} from 'react';
import '../../style/HomePage.css'
import Board from '@lourenci/react-kanban'
import '../../style/dashboard.css'
import '../../style/App.css'

export default function Dashboard(props) {
  const [dashboardState, setDashboardState] = useState([]);
  useEffect(() => {
    const messages = ["You look great today!", "Have you been drinking enough water?", "You're the yee to my haw <3", "Maybe the real art is the friends we made along the way..."];
    const getBoard = () => {
      if (props.currUser === undefined) {
        return
      }
      console.log('sending thing');
      console.log(props.currUser);
      console.log(props.currUser.signInUserSession.idToken.jwtToken);
      fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': props.currUser.signInUserSession.idToken.jwtToken
        },
      }).then(res => res.json())
        .then((res) => {
          setDashboardState({
            messages: messages,
            board: res.board.columns
          });
        })
    }

    getBoard();
  }, [props.currUser])

  function commitBoardChange(board) {
    fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': props.currUser.signInUserSession.idToken.jwtToken
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

  function renderDashboard() {
    //TODO: Add if not logged in logic here
    if (dashboardState.board == null) {
      return ([<div className="loading-container">
        <img className="loading-gif" src={require("../../assets/loading_brush_new.gif")} alt={"loading..."}/>
      </div>]);
    }
    return (
      [<h2 className="text">{dashboardState.messages[Math.floor(Math.random() * dashboardState.messages.length)]}</h2>,
        <div className="kanban-container">
          <Board
            allowRemoveLane
            allowAddColumn
            allowRenameColumn
            allowRemoveCard
            onLaneRemove={commitBoardChange}
            onCardRemove={commitBoardChange}
            onLaneRename={commitBoardChange}
            onCardDragEnd={commitBoardChange}
            onColumnDragEnd={commitBoardChange}
            initialBoard={dashboardState.board}
            allowAddCard={{on: "top"}}
            onNewCardConfirm={draftCard => ({
              id: new Date().getTime(),
              ...draftCard
            })}
            onCardNew={commitBoardChange}
          />
        </div>]);
  }

  return (
    <div className="content-container">{renderDashboard()}</div>
  )

}