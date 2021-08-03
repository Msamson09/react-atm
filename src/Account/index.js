import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super()
    this.balanceInput = React.createRef()
    this.state = {
      balance: 0,
    }
  }

  deposit = () => {
    let newBalance = parseInt(this.balanceInput.current.value)
    this.setState({ balance: this.state.balance + newBalance})
  }

  withdraw = () => {
    let newBalance = parseInt(this.balanceInput.current.value)
    this.setState({ balance: this.state.balance - newBalance})
  }


  render() {  
     return (
      <div className="account">
        <h2> {this.props.name} </h2>
        <div className={this.state.balance===0?"zero":"balance"}>${this.state.balance}</div>
        <input type="text" ref={this.balanceInput} placeholder="enter an amount" />
        <input onClick={this.deposit} type="button" value="Deposit" />
        <input onClick={this.withdraw} type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
