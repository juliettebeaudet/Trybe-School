import React from 'react';

class Pictures extends React.Component {
  render () {
    return (
    <a>
      <img src={this.props.src} alt={this.props.alt} height={this.props.height}></img>
      {this.props.legenda}
    </a>
    )
  }
}

export default Pictures;
