import React, {Component} from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  componentDidMount() {
    document.title = "Artifyc";
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default App;
