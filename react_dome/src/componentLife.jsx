import React from 'react';
//React 生命周期
export default class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    componentWillMount () {
        console.log('组件渲染之前');
    }
    componentDidMount () {
        console.log('组件渲染之后');
    }
    shouldComponentUpdate () {
        console.log('组件是否更新');
        return true;
    }
    componentWillUpdate () {
        console.log('更新前state，props');
    }
    componentDidUpdate () {
        console.log('更新后state，props');
    }
    componentWillReceiveProps () {
        console.log('props修改')
    }

    changeCount () {
        this.setState({
            count: this.state.count + 1
        })
    }

    changeTitle = () => {
        this.props.changeTitles('我是儿子组件')
    }

    render () {
        const { count } = this.state;
        return (
            <div>
                <h5>生命周期函数-{count}-{this.props.title}</h5>
                <button onClick={() => this.changeCount()} >修改</button>
                <button onClick={this.changeTitle}>修改props</button>
            </div>
        )
    }
}