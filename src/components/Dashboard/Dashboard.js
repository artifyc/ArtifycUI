import React from 'react';
import '../../style/HomePage.css'
import Board from '@lourenci/react-kanban'
import Hello from '../Auth/Hello'
const board = {
    columns: [
      {
        id: 1,
        title: 'Backlog',
        cards: [
          {
            id: 1,
            title: 'Add card',
            description: 'Add capability to add a card in a column'
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
            description: 'Move a card between the columns'
          },
        ]
      }
    ]
  }

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Board initialBoard={board} />
            </div>
        )
    }
}

export default Dashboard;