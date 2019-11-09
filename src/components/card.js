import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={this.props.imgsrc} alt="Grid pic not rendered"></img>;
  }
}

export default Card;
