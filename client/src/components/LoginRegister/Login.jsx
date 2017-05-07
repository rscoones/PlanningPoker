import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LoginWebApi from 'app/services/LoginWebApi';

export default class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      response: null
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsername(e, newValue) {
    this.setState({username: newValue});
  }

  handlePassword(e, newValue) {
    this.setState({password: newValue});
  }
  handleLogin() {
    const {username, password} = this.state;
    LoginWebApi.login(username, password).then(response => {
      this.setState({response: response});
    });
  }

  render() {
    return (
      <div>
        <TextField floatingLabelText="Username" hintText="Username" onChange={this.handleUsername} />
        <br />
        <TextField type="password" floatingLabelText="Password" hintText="Password" onChange={this.handlePassword} />
        <br />
        {this.state.response && this.state.response.error.message}
        <br />
        <RaisedButton label="Login" onTouchTap={this.handleLogin} />
      </div>
    )
  }
}
