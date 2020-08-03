import React, { Component } from 'react';
import User from './user';
import { connect } from 'react-redux';
import * as countActions from './actions/counter';
import * as userActions from './actions/user';
import { bindActionCreators } from 'redux';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }

    }


    render () {
        // console.log(this.props);
        const { add, reduce } = this.props;

        return (
            <div className="container">
                <div>{this.props.value}:{this.props.data}</div>
                <div>
                    {/* <button className='btn btn-primary' onClick={this.props.onAdd} >+</button>
                    <button className='btn btn-success' onClick={this.props.onReduce} >-</button> */}
                    {/* <button className='btn btn-primary' onClick={() => { add() }} >+</button>
                    <button className='btn btn-success' onClick={() => { reduce() }} >-</button> */}
                    <button className='btn btn-primary' onClick={() => this.props.countActions.add(10)} >+</button>
                    <button className='btn btn-success' onClick={() => this.props.countActions.reduce(5)} >-</button>
                </div>
                <User />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counter,
        data: state.user.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        countActions: bindActionCreators(countActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)