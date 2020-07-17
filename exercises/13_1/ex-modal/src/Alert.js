import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, contentTitle, content } = props;
  setTimeout(() => hideComponent(), 3000);
  return (
    <div className='Alert'>
      <h1>{contentTitle}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Alert;

Alert.propTypes = {
  hideComponent: PropTypes.func,
  contentTitle: PropTypes.string,
  content: PropTypes.string
};
