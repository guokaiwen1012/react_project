import React from 'react';
//form 表单受控组件 和 非受控组件 ref操作dom 节点
export default class RefsDome extends React.Component {
    constructor(props) {
        super(props);
        this.dataRef = React.createRef();
        this.state = {
            values: ''
        }
    }
    componentDidMount () {
        console.log(this.dataRef.current)
        this.dataRef.current.value = '123' //非受控from组件 可挂在多个标签元素
    }
    submit = (e) => {
        console.log(this.dataRef.current.value)
        e.preventDefault();
    }
    changeInput = (e) => {
        this.setState({
            values: e.target.value
        })
        console.log(e.target.value)
    }
    render () {
        let { values } = this.state;
        return (
            <form onSubmit={this.submit} >
                <input type="text" ref={this.dataRef} />
                <input type="submit" />
                <input type="text" value={values} onChange={this.changeInput} />
            </form>
        )
    }
}