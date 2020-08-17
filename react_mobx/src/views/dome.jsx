import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

@inject('dome')
@observer

class Dome extends Component {
    componentDidMount () {
        console.log(this.props);
    }

    changeList = () => {
        this.props.dome.change();
    }

    render () {
        return (
            <div className="Dome">
                react_mobx
                <Breadcrumb title={this.props.title} />
                <p>{this.props.dome.list}</p>
                <button onClick={this.changeList}>改变</button>
            </div>
        )
    }
}

export default Dome;
