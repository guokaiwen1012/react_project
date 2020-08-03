import React from 'react';
import Child1 from './child2';
import Child2 from './child1';
//状态提升  组件之间传递数据
export default class Parent extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 1,
            title: 'guokaiwen'
        }
    }

    changeInput = (e) => {
        this.setState({
            num: e.target.value
        })
    }

    render () {
        const { num } = this.state;
        return (
            <div>
                <h2>状态提升</h2>
                <input type="text" value={num} onChange={this.changeInput} />
                <Child1 num={num} />
                <Child2 num={num} />
            </div>
        )
    }
}