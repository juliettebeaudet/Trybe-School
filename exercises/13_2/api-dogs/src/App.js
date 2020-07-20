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

  componentDidMount() {
    this.fetchDogsApi();
  }

  // A cada tentativa de atualização do componente,
  // verifique se o campo message tem a string terrier.
  // Se sim, não atualize o componente;
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("last-dog-image", prevState.data.message);
    const breed = this.state.data.message.split("/")[4];
    alert(breed);
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
