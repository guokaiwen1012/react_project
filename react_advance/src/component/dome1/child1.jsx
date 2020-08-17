import React from 'react';

export default class Child1 extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>child1:{this.props.num}</div>
        )
    }
}