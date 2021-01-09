// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  handleDelayedClick = (event) => {
    event.persist()
    setTimeout( 
      () => { return this.props.onDelayedClick(event) }, this.props.delay 
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDelayedClick} >
          Delayed Click
        </button>
      </div>
    )
  }
}

export default DelayedButton