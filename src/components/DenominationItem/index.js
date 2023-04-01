import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  onButton = () => {
    const {denominations} = this.props
    const {onButtonClick} = this.props
    const {id, value} = denominations
    onButtonClick(id, value)
  }

  render() {
    const {denominations} = this.props
    const {value} = denominations
    return (
      <li className="buttons_con">
        <button onClick={this.onButton} type="button" className="button">
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
