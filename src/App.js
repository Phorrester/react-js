import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const COLORS = ["red", "blue"];



class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleNameChange = this.handleNameChange.bind(this);

  }
  handleNameChange(e) {
    this.setState({ name: e })
  }

  render() {

    return (

      <React.Fragment>
        <h1>Hello {this.state.name}</h1>
        <NameInput name={this.state.name} onNameChange={this.handleNameChange} />
      </React.Fragment>
    )
  }
}

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };

  }
  changeColor = (newColor) => {
    this.setState({
      color: newColor
    });
  }
  componentDidMount() {


    this.timerID = setInterval(
      () => {
        if (this.state.color === "red") {
          this.changeColor(COLORS[1])

        } else {
          this.changeColor(COLORS[0])

        }
      },
      2000);


  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div className={`${this.state.color} ${"col-sm-6"}`}/> //This is how you can add two classes.
    )
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>It is {this.state.date.toLocaleTimeString()}.</div>
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
}

class Message extends Component {
  constructor(props) {
    super(props);
    this.message = props.message;
  }
  render() {
    return (
      <p>{this.props.message}</p>
    )
  }
}
class NameInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {name: ""};

  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onNameChange(this.state.name);
  }
  handleChange(e) {
    this.setState({name: e.target.value})
    // this.props.onNameChange(e.target.value);
    
  }
  render() {
    const name = this.state.name;
    return (
      <form>
        <fieldset>
          <legend>Enter your name.</legend>
          <input
            value={name}
            onChange={this.handleChange}
            onKeyPress= {function(e) {
              if (e.key === "Enter"){
                e.preventDefault()
                document.querySelector("button").click();
              }
              
            }
             
            }></input>
        </fieldset>
        <button type="button" onClick={this.handleSubmit}>Click</button>
      </form>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Visitor" />
        <Clock />
        <Message message="This entire page is made using React." />
        <Message message="These squares each have their own state that will cycle between the two colors." />
        <div className="inline">
          <Square color="red" />
          <Square color="blue" />
        </div>
          <div className={"inline"}>
            <Square color={"blue"}/>
            <Square color={"red"}/>
          </div>
          <div className={"inline"}>
              <Square color={"red"}/>
              <Square color={"blue"}/>
          </div>
      </div>
    );
  }
}

export default App;
