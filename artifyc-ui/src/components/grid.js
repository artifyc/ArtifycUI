import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

class Grid extends React.Component {
  render() {
    return (
      <div>
        <Card imgsrc="./assets/example.jpg"/>
        <Card />
        <Card />
      </div>
    )
  }
}

export default Grid;
