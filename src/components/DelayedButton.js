// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component.React {

    handleClick = (event) => {
        event.persist()
        setTimeout()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    render() {
        return(
            <button onClick={this.handleClick} />
        )
    }
}
export default DelayedButton