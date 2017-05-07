import React from 'react';

export default class Pokers extends React.Component {

  render() {
    console.log(this.props.match.params);
    return (
      <div>many pokers</div>
    )
  }
}
