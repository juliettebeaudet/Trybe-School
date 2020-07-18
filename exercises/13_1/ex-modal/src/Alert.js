import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, children: { title, content, timeSeconds } } = props;
  // const { hideComponent, contentTitle, content } = props; (tinha antes)
  // const {title, othercontent, timeSeconds} = props.children; (minha primeira tentativa)
  setTimeout(() => hideComponent(), timeSeconds * 1000);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Alert;

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  contentTitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  children: {
    title: 'Algum título',
    content: 'Algum conteúdo',
    timeSeconds: 3,
  },
};

//2. O filho é quem definirá o tempo que o modal permanece na tela com o valor da chave timeSeconds.
// Use PropTypes para realizar a validação do formato do objeto.
