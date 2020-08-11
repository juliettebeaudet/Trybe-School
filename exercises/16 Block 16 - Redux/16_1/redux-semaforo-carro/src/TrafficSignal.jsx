import React from 'react';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  };
  if (signalColor === 'green') {
    return greenSignal;
  };
  if (signalColor === 'yellow') {
    return yellowSignal;
  };
  return null;
};

function TrafficSignal({ signalColor, changeSignal }) {
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">Red</button>
        <button onClick={() => changeSignal('yellow')} type="button">Yellow</button>
        <button onClick={() => changeSignal('green')} type="button">Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

// const mapStateToProps = (state) => ({ signalColor: state.trafficReducer.signal.color })
// ;
// adicionar trafficReducer porque dava erro "Cannot read property 'color' of undefined"
function mapStateToProps(state) {
  return { signalColor: state.trafficReducer.signal.color }
}

// const mapDispatchToProps = (dispatch) => ({
//   changeSignal: (payload) => dispatch(changeSignal(payload))});
const mapDispatchToProps = { changeSignal };
// dà mesmo resultado!

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
