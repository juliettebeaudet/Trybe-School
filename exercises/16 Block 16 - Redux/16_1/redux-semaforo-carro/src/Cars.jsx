import React from 'react';
import { moveCar } from './redux/actionCreators';
import { connect } from 'react-redux';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars({
  redCar, blueCar, yellowCar, moveCar,
}) {
  return (
    // Nesse exercício temos três carros com as cores Red, Blue e Yellow. Cada um deles apresenta um botão que ao ser clicado passa um estado para o Redux com um booleano.
    // Esse estado irá ser utilizado para alterar o CSS com a imagem do carro, para que ele se mova ou não.
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !redCar)} type="button">move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blueCar)} type="button">move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button">move</button>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   redCar: state.carReducer.cars.red,
//   blueCar: state.carReducer.cars.blue,
//   yellowCar: state.carReducer.cars.yellow,
// })
// funciona também escrito assim com return:
const mapStateToProps = (state) => {
return {
  redCar: state.carReducer.cars.red,
  blueCar: state.carReducer.cars.blue,
  yellowCar: state.carReducer.cars.yellow,
}}
// adicionar carReducer porque dava erro "Cannot read property 'yellow' of undefined"

// const mapDispatchToProps = { moveCar };
const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
})
// os dois funcionam!

export default connect(mapStateToProps, mapDispatchToProps)(Cars);

