import React, { Component } from 'react';



class DemoComponent extends Component {
  render() {
    return (
        <div className="panel-group" id="accordion">
           <div className="panel panel-default">
             <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href={this.props.value1}> {this.props.value}</a>
                </h4>
              </div>
              <img src={this.props.imageSrc} alt="boohoo"/>

              <div id={this.props.value1} className="panel-collapse collapse in">
                <div className="panel-body"> {this.props.phone}</div>
                </div>
              </div>
             </div>
         // </div>
    
    );
  }
}

export default DemoComponent;
