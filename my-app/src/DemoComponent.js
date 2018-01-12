import React, { Component } from 'react';



class DemoComponent extends Component {
  render() {
    return (
        <div class="panel-group" id="accordion">
           <div class="panel panel-default">
             <div class="panel-heading">
                <h4 class="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href={this.props.value1}> {this.props.value}</a>
                </h4>
              </div>
              <div id={this.props.value1} class="panel-collapse collapse in">
                <div class="panel-body"> {this.props.phone}</div>
                </div>
              </div>
             </div>
         // </div>
    
    );
  }
}

export default DemoComponent;
