import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router'


class BreadCrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    componentDidMount () {
        console.log(this)

    }

    render () {
        const { title } = this.props;
        return (
            <div className="header">
                <Breadcrumb>
                    <Breadcrumb.Item>中台</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="#/dome">自驾游中心</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href={'#' + this.props.location.pathname}>{title}</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export default withRouter(BreadCrumb);