import React from 'react';
import Layout from '../components/layout/Layout'
import {
    Route,
    Switch,
    withRouter,
  } from 'react-router-dom';

const Routes = () => {
    return (
       <Switch>
           <Route path="/" component={Layout}/>
       </Switch>
    );
}

export default Routes;
