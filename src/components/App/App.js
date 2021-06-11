import './App.css';
import React, { Component } from 'react';
import { getData } from '../../apiCalls';
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard';
import FavoriteList from '../FavoriteList/FavoriteList';
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      advice: null,
      cat: null,
      error: ''
    }
  }

  updateHomeDisplay = () => {
    getData()
      .then(data => {
        this.setState({ advice:data[0].slip.advice, cat: data[1].url} )
      })
    .catch(error => this.setState({ error: 'Something went wrong' }))
  }

  render() {
    return(
      <main>
        <Header></Header>
        <Dashboard
          advice={this.state.advice}
          catPicture={this.state.cat}
          getData={this.updateHomeDisplay}
        />
      </main>
    )
  }
}

export default App;
