// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component.React {
    
    handleEvent = (event) => {
        this.props.onRecieveCoordinates([event.clientX, event.clientY])
    }
    render(){
        return(
            <button onClick={this.handleEvent}/>
        )
        }
}
export default CoordinatesButton