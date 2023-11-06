import {Component} from 'react'
import './css'

class Counter extends Component {
  render() {
    return (
      <div data-testid="test">
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <div>0</div>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
