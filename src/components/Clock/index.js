import {Component} from 'react'
import './index.css'

class Clock extends Component {
  // modern approach
  state = {date: new Date()}

  /* older approach
  
    constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  */

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('unmounting')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    // console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
