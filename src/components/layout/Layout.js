import { Layout as AntLayout } from 'antd';
import React, { Component } from 'react';
import Header from './Header';
import LayoutWrapper from './styles/LayoutWrapper';
import Menu from './Menu';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import UserListPage from '../user/list/UserListPage';
const { Content } = AntLayout;

const User = () => <div>User page</div>
const Demo = () => <div>Demo page</div>

const Layout = () =>(
    <LayoutWrapper>
      <Menu />

      <AntLayout>
        <Header />

        <Content>
          <Switch>
          <Route exact path="/user" component={UserListPage}/>
          <Route exact path="/demo" component={Demo}/>

          </Switch>
          {/* <WrappedComponent {...this.props} /> */}
        </Content>
      </AntLayout>
    </LayoutWrapper>
  );

export default Layout;
