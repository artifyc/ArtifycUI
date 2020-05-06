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

  componentDidMount() {

    console.log('loading dashboard');

    const data = {
        board: board,
    };

    fetch('https://8vmazpdvrb.execute-api.us-east-1.amazonaws.com/qa', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => console.log(res))

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