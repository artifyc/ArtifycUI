import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import '../style/grid.css';
import imgURL from "../assets/example.jpg";

class Grid extends React.Component {
  render() {
    return (
      <div class="grid">
        <Card imgsrc={imgURL}/>
        <Card imgsrc={imgURL}/>
        <Card imgsrc={imgURL}/>
      </div>
    )
  }
}

export default Grid;
