import React from 'react';
// import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

export default class home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount = () => {
        console.log()
    }

    render () {
        return (
            <div>
                home
            </div>
        )
    }
}