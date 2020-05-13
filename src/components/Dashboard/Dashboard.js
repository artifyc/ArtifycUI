import React from 'react';
import '../../style/HomePage.css'
import Board from '@lourenci/react-kanban'

const board = {
    columns: [
      {
        id: 69,
        title: 'Backlog',
        cards: [
          {
            id: 1,
            title: 'Add card',
            description: 'Ellery was here bitches'
          },
        ]
      },
      {
        id: 2,
        title: 'Doing',
        cards: [
          {
            id: 2,
            title: 'Drag-n-drop support',
            description: 'AWS IS MY BITCH!!'
          },
        ]
      }
    ]
  }

class Dashboard extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
        currUser: this.props.user,
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

      const data = {
        board: board,
      };

      console.log(JSON.stringify(data));

      fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa/boards', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': this.props.currUser.signInUserSession.idToken.jwtToken
          },
          body: JSON.stringify({
          "board":
          {"columns":
          [{"id":70,
          "title":"Backlog",
          "cards":[
              {"id":1,"title":"Add card","description":"Ellery was here bitches"}]},
              {"id":2,"title":"Doing","cards":[{"id":2,"title":"Drag-n-drop support","description":"AWS IS MY BITCH!!"}]}]}}),
        })
          .then(res => res.json())
          .then(res => console.log(res))
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