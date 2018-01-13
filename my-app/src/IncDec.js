import React, { Component } from 'react';

class IncDec extends Component {
    constructor(props){
        super(props)
        this.state={myCounter:0};
    }
    increment=()=>{
        this.props.myFunction(1)
        this.setState({
            myCounter:this.state.myCounter+1
        })
    }
    decrement=()=>{
        this.props.myFunction(-1)
        this.setState({
            myCounter:this.state.myCounter-1
        })
    }
    render() {
      return (
          <div>
              <button type="button" class="btn btn-default btn-sm" onClick={this.increment}>
          <span class="glyphicon glyphicon-thumbs-up"></span>
               {this.props.incrementName}</button> 
              <b> {this.state.myCounter}</b>
              <button type="button" class="btn btn-default btn-sm" onClick={this.decrement}>
          <span class="glyphicon glyphicon-thumbs-down"></span>
              {this.props.decrementName}</button> 
              </div>
        
      );
    }
}

export default IncDec;