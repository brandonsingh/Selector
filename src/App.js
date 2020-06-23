import React, {Component} from 'react';
import Shape from "./Shape.js";

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: 'square',
    };
  };

selectShape = (shapeName) => {
  this.setState({
    selectedShape: shapeName
  });
};


  render () {
    const { selectedShape } = this.state;


    return (
      <div className="container">
        <div className="navbar">
          <div>Selected: <span>{selectedShape}</span> </div>
          <div>{this.state.selectedShape}</div>
        </div>
        <div className="shape-list">
          <Shape Shape="square" selectShape={this.selectShape}/>
          <Shape Shape="circle" selectShape={this.selectShape}/>
          <Shape Shape="triangle" selectShape={this.selectShape}/>
        
        </div>
        
      </div>
    );
  };
};

export default Selector;