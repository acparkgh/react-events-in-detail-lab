// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButtons extends React.Component {
  
  constructor() {
    super()
    this.state = {

    }
  }
  
  handleOnClickEvent = (event) => {
    // event.persist()
    // console.log(event)
    return (
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
    )
  }
  
  render() {
    
    return (
      <div>
        {/* <button onClick={ event => this.props.onReceiveCoordinates([event.clientX, event.clientY]) } > */}
        <button onClick={this.handleOnClickEvent} >
          Coordinates Button
        </button>
      </div>
    )
  }

}

export default CoordinatesButtons