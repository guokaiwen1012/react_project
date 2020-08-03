import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }
    getData = (e) => {
        this.setState({
            value: e
        })
    }
    render () {
        return (
            <div>
                Parent:{this.state.value}
                <Child title='子标题' sendData={this.getData} />
            </div>
        )
    }
}

export default Parent