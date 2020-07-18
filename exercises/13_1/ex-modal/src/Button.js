import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  return (
    <button
      type="button"
      disabled={isDisable}
      onClick={() => showComponent()}
    >
      {content}
    </button>
  )
}
export default Button;

//1. Crie a checagem de tipo para todas as props dos componentes.
Button.propTypes = {
  showComponent: PropTypes.func,
  isDisable: PropTypes.bool,
  content: PropTypes.string
};
