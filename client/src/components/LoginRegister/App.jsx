import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Login from './Login.jsx';
import Register from './Register.jsx';
import LoginWebApi from 'app/services/LoginWebApi';

export default class LoggedIn extends React.Component {

  render() {
    return (
      <Tabs>
        <Tab label="Login" >
          <Login />
        </Tab>
        <Tab label="Register" >
          <Register />
        </Tab>
      </Tabs>
    );
  }
}
