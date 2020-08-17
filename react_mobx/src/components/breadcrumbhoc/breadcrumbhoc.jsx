import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
const breadcrumbNameMap = {//跟路由路径保持一致
    "/dome": "dome",
    "/strategy": "攻略管理"
};

class Bread extends Component {
    render () {
        const { location } = this.props;
        const pathSnippets = location.pathname.split("/").filter((i) => i);
        const extraBreadcrumbItems = pathSnippets.map((item, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbNameMap[url]}</Link>
                </Breadcrumb.Item>
            );
        });
        const breadcrumbItems = [
            <Breadcrumb.Item key="home"><Link to="/">首页</Link></Breadcrumb.Item>
        ].concat(extraBreadcrumbItems);
        console.log(pathSnippets, extraBreadcrumbItems);
        return (
            <div className="demo">
                <Breadcrumb style={{ margin: "16px 0" }}>
                    {breadcrumbItems}
                </Breadcrumb>
            </div>
        );
    }

}
export default withRouter(Bread);