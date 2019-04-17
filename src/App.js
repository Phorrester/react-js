import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Title extends Component{
  constructor(props){
    super(props);
    this.name = props.name;
  }
  render(){
    return (
      <h1>Hello {name}</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title name="Cody" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
