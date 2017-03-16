import React from 'react';
import { matchPath } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import './style.css';

const routes = [
  {
    path: '/',
    icon: 'home',
    title: 'Home',
    exact: true,
  },
  {
    path: '/cookbooks',
    icon: 'book',
    title: 'Cookbooks',
    exact: false,
  },
  {
    path: '/recipies',
    icon: 'file-text',
    title: 'Recipies',
    exact: false,
  },
];

const onCollapse = props =>
  collapsed => {
    props.history.push(props.location.pathname, collapsed ? 'collapsed' : '');
  };
const onClick = props =>
  ({ key: path }) => {
    props.history.push(path, props.location.state);
  };
const calcPaths = pathname => {
  const matches = routes.map(({ path, exact }) =>
    matchPath(pathname, { path, exact, strict: false }));
  const paths = matches.filter(m => !!m).map(m => m.path);
  return paths;
};
export default props => (
  <Layout className="layout">
    <Sider
      collapsible
      collapsed={props.location.state === 'collapsed'}
      onCollapse={onCollapse(props)}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={calcPaths(props.location.pathname)}
        onClick={onClick(props)}
      >
        {routes.map(r => (
          <Menu.Item key={r.path}>
            <span>
              <Icon type={r.icon} />
              <span className="nav-text">{r.title}</span>
            </span>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
    <Layout>
      <Header>Stuff</Header>
      <Content className="content">
        {props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Jonas Faber ©2016</Footer>
    </Layout>
  </Layout>
);
