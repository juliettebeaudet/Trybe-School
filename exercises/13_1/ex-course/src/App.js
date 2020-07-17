// import React, { Component } from 'react';
// import MyList from './MyList';

// class App extends Component {
//   render() {
//     return (
//       <div className='main'>
//         <h1>Minha Lista de Componentes</h1>
//         <MyList>
//           <li>SUPIMPA</li>
//           SUPIMPA 2.0 - Melhor palavra!
//           <button type="button" onClick={() => console.log('show')}>SHOW</button>
//         </MyList>
//       </div>
//     )
//   }
// }
// export default App;

import React, { Component } from 'react';
import MyList from './MyList';
import ShowButton from './ShowButton';
import Pictures from './Pictures';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Minha Lista de Componentes',
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  render() {
    return (
      <div className="main">
        <h1>{this.state.title}</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <ShowButton changeTitle={this.changeTitle} value="Título Show" />
        </MyList>
        <Pictures
          height="200"
          src="https://course.betrybe.com/images/logo_white.png"
          alt="Logo da Trybe"
          legenda="Lista feita na Trybe"
        />
      </div>
    );
  }
}
export default App;
