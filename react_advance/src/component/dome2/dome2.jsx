import React,{Fragment} from 'react';

const Ticp = () => {
    return(
        <Fragment>
        <li>123</li>
        <li>321</li>
        </Fragment>
    )
}

export default class Dome2 extends React.Component{
    render(){
        return(
            <ul>
                <Ticp/>
            </ul>
        )
    }
}