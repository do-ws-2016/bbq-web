import React from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout;
import './style.css'
const onCollapse = (props) => (collapsed) => {
  props.push(props.location.pathname, collapsed ? 'collapsed' : '')
}
const onClick = (props) => ({key}) => {
  props.push(key, props.location.state)
}

export default (props) => (
  <Layout className="layout">
    <Sider
      collapsible
      collapsed={props.location.state === 'collapsed'}
      onCollapse={onCollapse(props)}
    >
      <div className="logo" />
      <Menu theme="dark" mode='inline' selectedKeys={[props.location.pathname]} onClick={onClick(props)}>
        <Menu.Item key="/">
          <span>
            <Icon type="home" />
            <span className="nav-text">Home</span>
          </span>
        </Menu.Item>
        <Menu.Item key="/cookbooks">
          <span>
            <Icon type="book" />
            <span className="nav-text">Cookbooks</span>
          </span>
        </Menu.Item>
        <Menu.Item key="/recipies">
          <span>
            <Icon type="file-text" />
            <span className="nav-text">Recipies</span>
          </span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header>Stuff</Header>
      <Content style={{margin: '10px'}}>
        {props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Jonas Faber ©2016
      </Footer>
    </Layout>
  </Layout>
)
