import React, { Component } from 'react';

class Child extends Component {

    handler = () => {
        this.props.sendData('父标题');
    }

    render () {
        return (
            <div>
                <h5>Child:{this.props.title}</h5>
                <button className="btn btn-primary" onClick={this.handler}>传递数据</button>
            </div>
        )
    }
}

export default Child