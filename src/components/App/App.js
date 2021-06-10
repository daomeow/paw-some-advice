import './App.css';
import React, { Component } from 'react';
import { getAdvice } from '../../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      advice: '',
      error: ''
    }
  }

  componentDidMount = () => {
    getAdvice()
      .then(data => {
        this.setState({ advice : data.slip.advice } )
      })
    .catch(error => this.setState({ error: 'Something went wrong' }))
  }

  render() {
    return(
      <main>
        <h1>Hi</h1>
        <p>{this.state.advice}</p>
      </main>
    )
  }
}
export default App;
