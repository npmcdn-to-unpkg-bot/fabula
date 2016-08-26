'use strict'

// init socket ASAP
var socket = require('./socket');

var React = require('react');
var ReactDOM = require('react-dom');
var LoginBox = require('./LoginBox.jsx');
var MessageForm = require('./MessageForm.jsx');
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

var App = React.createClass({
  render: function(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <LoginBox></LoginBox>
          <MessageForm></MessageForm>
        </div>
      </MuiThemeProvider>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('login-box'));
