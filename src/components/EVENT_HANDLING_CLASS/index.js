import React, { Component } from 'react'
import './style.css'

export default class EVENT_HANDLING_CLASS extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : ''
      };
    };
    
    handleOnChange = (e) => {
        this.setState({
            changedValue : e.target.value
        }, () =>{
            console.log(this.state.changedValue);
        })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleOnChange}/>
                <br/>
                <p>{ this.state.changedValue }</p>
            </div>
        )
    }
}
