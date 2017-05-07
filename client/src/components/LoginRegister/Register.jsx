import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LoginWebApi from 'app/services/LoginWebApi';

export default class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      response: ""
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleUsername(e, newValue) {
    this.setState({username: newValue});
  }

  handleEmail(e, newValue) {
    this.setState({email: newValue});
  }

  handlePassword(e, newValue) {
    this.setState({password: newValue});
  }

  handleRepeatPassword(e, newValue) {
    this.setState({repeatPassword: newValue});
  }

  handleRegister() {
    const {username, email, password} = this.state;
    LoginWebApi.register(username, email, password).then(response => {
      this.setState({response: response});
    });
  }

  getDisabled(state) {
    const {password, repeatPassword, email, username} = state;

    return !password || !repeatPassword || !email || !username;
  }

  render() {
    const {password, repeatPassword} = this.state;
    const disabled = this.getDisabled(this.state);

    let errorText = null;
    if (!disabled && password !== repeatPassword) {
      errorText = "Passwords must match";
    }

    return (
      <div>
        <TextField floatingLabelText="Username" hintText="Username" onChange={this.handleUsername} />
        <br />
        <TextField floatingLabelText="Email" hintText="Email" onChange={this.handleEmail} />
        <br />
        <TextField type="password" floatingLabelText="Password" hintText="Password" onChange={this.handlePassword} />
        <br />
        <TextField type="password" floatingLabelText="Repeat password" errorText={errorText} hintText="Repeat password" onChange={this.handleRepeatPassword} />
        <br />
        {this.state.response && this.state.response.error.message}
        <br />
        <RaisedButton label="Register" onTouchTap={this.handleRegister} />
      </div>
    )
  }
}
