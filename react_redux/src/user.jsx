import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from './actions/user';

class User extends Component {
    constructor(props) {
        super(props)

    }

    render () {
        console.log(this.props);
        return (
            <div className="container">
                <p>user:{this.props.user.data}</p>
                <p>title:{this.props.user.user.title}</p>
                <button onClick={() => this.props.userActions.add()}>添加</button>
                <button onClick={() => this.props.userActions.fetch_get()}>请求</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);