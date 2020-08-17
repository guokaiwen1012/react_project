import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
@inject('strategy')
@observer

class Strategy extends Component {
    componentDidMount () {
        console.log(this)
    }

    render () {
        return (
            <div className="Strategy">
                Strategy::
                <Breadcrumb title={this.props.title} />
            </div>
        )
    }
}

export default Strategy;
