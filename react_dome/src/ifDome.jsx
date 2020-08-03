import React from 'react';
//条件渲染
export default class ifDome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    isShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render () {
        const showText = this.state.isShow ? '正确' : '错误';
        return (
            <div>
                <p>if判断:{showText}</p>
                {
                    showText === '正确' ? <p>正确的模板</p> : <p>错误的模板</p>
                }
                <button onClick={this.isShow} >修改</button>
            </div>
        )
    }
}