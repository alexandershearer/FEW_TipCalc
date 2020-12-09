import React, { Component } from 'react'
import './tipcalc.css'

class TipCalc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bill: 10,
            tip_amount: 10,
            split: 1
        }
    }

    render() {
        const { bill, tip_amount, split } = this.state

        const tip_percentage = this.state.tip_amount * 0.01
        const tip = this.state.bill * tip_percentage
        const total = +this.state.bill + +tip
        const split_amount = split ? total / this.state.split : total / 1

        return (
            < div >
                <h1>Tip Calculator</h1>
                <form>
                    <h2>Bill</h2>
                    <input
                        type="text"
                        value={bill}
                        onChange={(e) => this.setState({ bill: e.target.value })} />
                    <h2>Tip %</h2>
                    <input
                        type="text"
                        value={tip_amount}
                        onChange={(e) => this.setState({ tip_amount: e.target.value })} />
                    <h2>How many people?</h2>
                    <input
                        type="text"
                        value={split}
                        onChange={(e) => this.setState({ split: e.target.value })} />
                </form>
                <h3>Tip Amount: ${tip.toFixed(2)}</h3>
                <h3>Total Cost: ${total.toFixed(2)}</h3>
                <h3>Total per person: ${split_amount.toFixed(2)}</h3>
            </ div >
        )
    }
}


export default TipCalc