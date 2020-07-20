import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
    this.fetchDogsApi = this.fetchDogsApi.bind(this);
  }

  componentDidMount() {
    this.fetchDogsApi();
  }

  fetchDogsApi() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  // Estrutura de dados que api retorna:
  // {
  //   "message": "https:\/\/images.dog.ceo/breeds/bulldog-french/n02108915_5306.jpg",
  //   "status": "success"
  // }

  shouldComponentUpdate(nextProps, nextState) {
    
  }

  render() {
    if (!this.state.data) return (<h1> Loading...</h1>);
    return (
      <div>
        <button onClick={this.fetchDogsApi}>See next doggo</button>
        <div><img src={this.state.data.message} /></div>
      </div>
    );
  }
}

export default App;
