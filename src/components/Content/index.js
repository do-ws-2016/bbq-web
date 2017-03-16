import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default props => (
  <Layout>
    <Header>{props.header}</Header>
    <Content className="content">
      {props.children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>Jonas Faber ©2016</Footer>
  </Layout>
);
