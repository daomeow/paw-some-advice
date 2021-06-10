import './App.css';
import React, { Component } from 'react';
import { getAdvice, getCatPicture } from '../../apiCalls';
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super()
    this.state = {
      advice: '',
      cat: '',
      error: ''
    }
  }

  componentDidMount = () => {
    this.displayCat();
    getAdvice()
      .then(data => {
        this.setState({ advice : data.slip.advice } )
      })
    .catch(error => this.setState({ error: 'Something went wrong' }))
  }

  displayCat = () => {
    getCatPicture() 
    .then(data => {
      this.setState({ cat: data.url})
    })
  }

  render() {
    return(
      <main>
        <Header></Header>
        <Dashboard
          advice={this.state.advice}
          catPicture={this.state.cat}
        />
      </main>
    )
  }
}
export default App;
