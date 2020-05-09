import React from 'react';
import 'react-typist/dist/Typist.css';
import './style/App.css'
import HeaderBar from './components/Header/HeaderBar';

class App extends React.Component {

  render() {
    return (
        <div>
            <HeaderBar />
        </div>
    )
  }
}


export default App;
