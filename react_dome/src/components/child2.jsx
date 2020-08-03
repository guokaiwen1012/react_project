import React from 'react';

export default class Child2 extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <div>{this.props.num}</div>
        )
    }
}