import React from 'react';
import Nav from './nav';
import States from './changeState';
import Life from './componentLife';
import SetStateDome from './setStatedome';
import IfDome from './ifDome';
import ListMap from './listMap';
import RefDome from './refsDome';
import Parent from './components/parent';
import Inherit from './componentInherit';
import Antd from './antd';
// app 引入各个dome文件
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'App',
      nav1: ['java', 'html', 'css'],
      titles: "文本"
    }
  }

  changeTitle = (data) => {
    this.setState({
      titles: '修改props:' + data
    })
  }

  render () {
    const { name, titles } = this.state;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>Page:{name}</h3>
        <Nav name='导航' nav1={this.state.nav1} />
        <States />
        <Life title={titles} changeTitles={this.changeTitle} />
        <SetStateDome />
        <IfDome />
        <ListMap />
        <RefDome />
        <Parent />
        <Inherit>继承组件</Inherit>
        <Antd />
      </div>
    )
  }
}
