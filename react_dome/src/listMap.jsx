import React from 'react';
//列表渲染 循环遍历 渲染dom
export default class listMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {
                    name: "郭凯文",
                    sex: '男',
                    age: '23',
                    list: ['111', '222', '333']
                },
                {
                    name: '王一',
                    sex: '男',
                    age: '18',
                    list: ['444', '555', '666']
                },
                {
                    name: '梦丽',
                    sex: '女',
                    age: '28',
                    list: ['777', '888', '999']
                },
            ]
        }
    }

    addList = () => {
        let concatData = {
            name: '张三',
            sex: '男',
            age: '24',
            list: ['000', '000', '000']
        }
        this.setState({
            listData: this.state.listData.concat(concatData)
        })
    }

    render () {
        const { listData } = this.state;
        return (
            <ul>
                {
                    listData.map((item, index) => {
                        return (
                            <li key={index} >
                                <p>{item.name}</p>
                                <p>{item.sex}</p>
                                <p>{item.age}</p>
                                {
                                    item.list.map((val, ind) => {
                                        return <span key={ind} >{val}</span>
                                    })
                                }
                            </li>
                        )
                    })
                }
                <button onClick={this.addList} >增加</button>
            </ul>
        )
    }
}