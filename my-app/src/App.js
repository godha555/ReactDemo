import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoComponent from './DemoComponent.js';
import IncDec from './IncDec.js';

class App extends Component {
  constructor(props){
    super(props)
    this.myFunction=this.myFunction.bind(this);
    this.state = {positiveValue: 0,negativeValue: 0};
  }
  myFunction(counter){
    console.log(counter)
    if(counter===1){
      this.setState({positiveValue:this.state.positiveValue+1})
    }else if(counter===-1){
      this.setState({negativeValue:this.state.negativeValue+1})
    }
  }
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hi, this is <i> Lakshmi </i> </h1>
          <h4> Welcome to demo class</h4>
        </header>
        
        <p className="App-intro">
          Contacts
        </p>
        <div className="container">
          <div className="contact">
          <DemoComponent imageSrc="/image/IMG_234.JPG" value="John" phone="+1 343565123" value1="c1"></DemoComponent>
          <DemoComponent imageSrc="/image/IMG_234.JPG" value="Paul" phone="+1 456566243" value1="c2"></DemoComponent>
          <DemoComponent imageSrc="/image/IMG_234.JPG" value="Joe" phone="+1 5656546523" value1="c3"></DemoComponent>
          </div>
        </div>
      </div> */
      <div className="App">
        <header className="App-header">
          <h4> Total = {this.state.positiveValue - this.state.negativeValue} times</h4>
          
          </header>

          <IncDec incrementName="Like" decrementName="Dislike" myFunction={this.myFunction} />
          <IncDec incrementName="Like" decrementName="Dislike" myFunction={this.myFunction} />
          <IncDec incrementName="Like" decrementName="Dislike" myFunction={this.myFunction} />
      </div>
    );
  }
}

export default App;
