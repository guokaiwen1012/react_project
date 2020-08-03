import React from 'react';
import DefDome from './defaultsDome';
import { Redirect } from 'react-router-dom'

export default class defaults extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            isLogin: true
        }
    }

    componentDidMount = () => {
        console.log()
    }

    goback = () => {
        console.log(this.props);
        // this.props.history.push('/'); //push是叠加 上一次的页面依然存在
        this.props.history.replace('/'); //replace是替换 上一次的页面不存在
    }

    render () {
        let { isLogin } = this.state;
        return (
            <div>
                {isLogin ? <div>defaults</div> : <Redirect to="/" />}
                <button onClick={this.goback} >回到home</button>
                <DefDome />
            </div>
        )
    }
}