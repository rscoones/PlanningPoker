import React from 'react';
import ReactDOM from 'react-dom';
// ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// poly fills
import fetchPolyfill from 'fetch-polyfill';
require('es6-promise').polyfill();

import App from './containers/App.jsx';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}><App /></MuiThemeProvider>, document.getElementById('main'))
