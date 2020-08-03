import React from 'react';
import querystring from 'querystring';

export default class userCenter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentDidMount = () => {
        // const params = new URLSearchParams(this.props.location.search);
        // console.log(params.get("name"));

        // const value = querystring.parse(this.props.location.search);
        // console.log(value);
    }

    render () {
        return (
            <div>
                userCenter:{this.props.match.params.id}-{this.props.match.params.name}
            </div>
        )
    }
}