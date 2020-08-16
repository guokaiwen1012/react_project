import React from 'react';

const MyApi = {
    count:0,
    scrible(cb){
        this.intervalId = setInterval((cd)=>{
            this.count+=1;
            cb(this.count);
        },1000)
    },
    unscrible(){
        clearInterval(this.intervalId);
        this.reset();
    },
    reset(){
        this.count = 0;
    }
}

export default class Parent extends React.Component{
    state={
        count:0
    }

    componentDidMount(){
        MyApi.scrible((currentCount)=>{
            this.setState({
                count:currentCount
            })
        })
    }

    componentWillUnmount(){
        MyApi.unscrible();
    }
    render(){
        return(
            <div>
                Parent:{this.state.count}
            </div>
        )
    }
}