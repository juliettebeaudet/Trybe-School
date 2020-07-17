import React from 'react';
import PropTypes from 'prop-types';

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

Pictures.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
};
Pictures.defaultProps = {
  height: 400,
};

export default Pictures;
