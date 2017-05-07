import React from 'react';
import {Link} from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import LoginForm from 'app/components/LoginRegister/App.jsx'

export default class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <FlatButton {...this.props} label="Login/Register" onClick={this.handleOpen} />
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <LoginForm />
        </Dialog>
      </div>
    );
  }
}

LoginRegister.muiName = 'FlatButton';
