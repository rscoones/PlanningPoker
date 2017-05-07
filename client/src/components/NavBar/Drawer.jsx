import React from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <IconButton {...this.props} onClick={this.handleToggle}>
          <NavigationMenu />
        </IconButton>
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <Link to="/profile" onClick={this.handleClose}><Avatar size={150} color={purple500} backgroundColor={blue300} style={{margin: 60, marginBottom: 20}}>R</Avatar></Link>
          <Link to="/" onClick={this.handleClose}><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>
          <Link to="/pokers/me" onClick={this.handleClose}><MenuItem onTouchTap={this.handleClose}>My Pokers</MenuItem></Link>
          <Link to="/pokers" onClick={this.handleClose}><MenuItem onTouchTap={this.handleClose}>Active Pokers</MenuItem></Link>
        </Drawer>
      </div>
    )
  }
}
