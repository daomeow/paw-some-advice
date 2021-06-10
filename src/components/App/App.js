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

  render() {
    return(
      <main>
        <h1>Hi</h1>
      </main>
    )
  }
}
export default App;
