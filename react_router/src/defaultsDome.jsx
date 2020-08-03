import React, { Component } from 'react';
import { withRouter, Prompt } from 'react-router-dom';

class DefDome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    //withRouter 高阶组件 当前组件没有被路由管理，所以没有路由对象
    goback = () => {
        console.log(this.props);
        this.props.history.replace('/')
    }
    // Prompt 钩子函数 可以判断是否要离开此页面
    render () {
        return <>
            <button onClick={this.goback}>回到主页</button>
            <Prompt
                when={!!this.state.value}
                message="确定要离开此页面吗？"
            />
            <input type="text" value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }) }} />
        </>
    }
}


export default withRouter(DefDome)