import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Footer from './components/footer';
import Header from './components/header';
import Routes from "./Routes";
import Search from "./components/search";
import SearchResultComponent from "./components/SearchResults/SearchResultComponent";
import './style/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <SearchResultComponent/>
        <Footer />
      </div>
    )
  }
}


export default App;
