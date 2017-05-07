import React from 'react';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import LoginWebApi from 'app/services/LoginWebApi';

export default class LoggedIn extends React.Component {

  handleLogout() {
    LoginWebApi.logout();
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<FlatButton {...this.props} label="Richard" />}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
          <Link to="/profile"><MenuItem primaryText="Profile" /></Link>
          <Link to="/help"><MenuItem primaryText="Help" /></Link>
          <MenuItem primaryText="Logout" onClick={this.handleLogout} />
        </IconMenu>
      </div>
    );
  }
}

LoggedIn.muiName = 'FlatButton';
