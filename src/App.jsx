'use strict'

// init socket ASAP
var socket = require('./socket');

var React = require('react');
var ReactDOM = require('react-dom');
var LoginBox = require('./LoginBox.jsx');
var MessageBox = require('./MessageBox.jsx');

import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import AppBar from 'react-toolbox/lib/app_bar';
import style from './style';

var App = React.createClass({
  render: function(){
    return (
      // <Layout>
        // <Panel scrollY={true}>
        <div className={style.app}>
          <AppBar fixed flat>2016 Fall FSE Chat Room</AppBar>
          <div  style={{ 'min-width': '480px', 'max-width': '600px', margin: 'auto', }}>
            <LoginBox/>
            <MessageBox/>
          </div>
          </div>
        // </Panel>
      // </Layout>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
