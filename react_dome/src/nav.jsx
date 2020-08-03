import React from 'react';
// props 接收参数 state 渲染
export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: ['首页', 'vue', 'react']
        }
    }

    render () {
        const { nav } = this.state;
        const navs = nav.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        let nav1 = this.props.nav1.map((val, ind) => {
            return <li key={ind}>{val}</li>
        })
        return (
            <div>
                <h5>{this.props.name}</h5>
                <ul>
                    {navs}
                </ul>
                <ol>
                    {nav1}
                </ol>
            </div>
        )
    }
}