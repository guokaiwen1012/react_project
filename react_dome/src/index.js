import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import 'antd/dist/antd.css';
//主文件
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App title='React-dome' />
  </ConfigProvider>,
  document.getElementById('root')
);

