import React from 'react';

export default class Child1 extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <div>{this.props.num * 5}</div>
        )
    }
}