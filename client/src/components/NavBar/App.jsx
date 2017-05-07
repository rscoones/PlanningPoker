import React from 'react';
import AppBar from 'material-ui/AppBar';
import LoginRegister from './LoginRegister.jsx';
import LoggedIn from './LoggedIn.jsx';
import Drawer from './Drawer.jsx';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true,
    };
  }


  render() {
    const {logged} = this.state;

    return (
      <AppBar
        title="Planning Poker"
        iconElementLeft={logged ? <Drawer /> : <div></div>}
        iconElementRight={logged ? <LoggedIn /> : <LoginRegister />} />
    )
  }
}
