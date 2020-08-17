import React from 'react';

export default class Child extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.num == this.props.num){
            return false;
        }
        return true;
    }

    render(){
        return (
            <div>child:{this.props.num}</div>
        )
    }
}