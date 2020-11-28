import React, { Component } from 'react'

class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "This is class state",
        };
        this.stateChange = this.stateChange.bind(this);
      }

      stateChange(){
          this.setState({value:`This is class state value: ${Math.floor(Math.random()*100)}`})
      }

    render() {
        return (
            <div>
            <p style={{textDecoration:'underline'}}>ClassState</p>
            <p>{this.state.value}</p>
            <button onClick={this.stateChange}>Change Class State</button>
            </div>
        )
    }
}

export default ClassState
