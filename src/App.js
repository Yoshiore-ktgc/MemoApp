import React from 'react';
import './assets/styles/App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
  
}

export default App;
