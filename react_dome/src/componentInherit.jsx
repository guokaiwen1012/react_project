import React from 'react';
import PropTypes from 'prop-types';
// 组件继承 PropTypes类型检查
export default class Inherit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                哈哈哈:{this.props.children}
                <p>{this.props.name}</p>
            </div>
        )
    }
}

Inherit.propTypes = {
    name: PropTypes.string
};

// 指定 props 的默认值：
Inherit.defaultProps = {
    name: 'Stranger'
};