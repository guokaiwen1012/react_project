import React from 'react';
import { Link } from 'react-router-dom';
export default class Nav extends React.Component {
    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link
                            to={{
                                pathname: '/dome',
                                search: "",
                                hash: "",
                                state: { title: "dome" }
                            }}>dome</Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/strategy',
                                search: "",
                                hash: "",
                                state: { title: "攻略管理" }
                            }}>攻略管理</Link>
                    </li>
                </ul>
            </div>
        )
    }
}