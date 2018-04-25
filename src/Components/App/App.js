import React, { Component } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Board from '../Board/Board';

class App extends Component {
  render () {
    return (
      <div className="app">
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
