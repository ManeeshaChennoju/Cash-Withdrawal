import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onButtonClick = id => {
    const {count} = this.state
    let amount
    switch (id) {
      case 1:
        amount = 50
        break
      case 2:
        amount = 100
        break
      case 3:
        amount = 200
        break
      case 4:
        amount = 500
        break
      default:
        break
    }
    this.setState({count: count - amount})
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="Home">
        <div className="container">
          <div className="profile_con">
            <p className="symbol"> s </p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance_con">
            <p className="yourBalance">Your Balance</p>
            <div className="amount_con">
              <p className="amount"> {count}</p>
              <p className="rupees"> In Rupees </p>
            </div>
          </div>
          <p className="withdraw"> Withdraw</p>
          <p className="choose_sum"> CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul_container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                onButtonClick={this.onButtonClick}
                denominations={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
