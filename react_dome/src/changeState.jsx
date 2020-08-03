import React from 'react';
//改变state 数据 渲染dom
export default class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 10,
            isFlag: true
        }
    }

    add () {
        let num = this.state.num;
        this.setState({
            num: num += 1
        })
    }

    remove () {
        let num = this.state.num;
        this.setState({
            num: num -= 1
        })
    }

    changeText () {
        let isFlag = this.state.isFlag;
        this.setState({
            isFlag: !isFlag
        })
    }

    render () {
        const { isFlag, num } = this.state;
        const flagText = isFlag ? '我是123' : '我是321';
        return (
            <div>
                <p>{num}</p>
                <button onClick={() => { this.add() }} >增加</button>
                <button onClick={() => { this.remove() }} >减少</button>
                <p>{flagText}</p>
                <button onClick={() => { this.changeText() }} >改变</button>
            </div>
        )
    }
}