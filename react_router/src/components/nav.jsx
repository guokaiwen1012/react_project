import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';
export default class Nav extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/">home</NavLink>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/defaults',
                                search: "?id=123",
                                hash: "#test-hash",
                                state: { flag: "flag" }
                            }}>default</Link>
                    </li>
                    <li>
                        <Link to="/userCenter/1005/iem">userCenter</Link>
                    </li>
                </ul>
            </div>
        )
    }
}