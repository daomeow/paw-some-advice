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
      favorites: [],
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

  addToFavoriteList = (newFavorite) => {
    if (this.state.advice) {
      var joined = this.state.favorites.concat(this.state.advice);
      this.setState({ favorites: joined })
    }
  }

  render() {
    return(
      <main>
        <Header></Header>
        <Switch>
          <Route 
            exact path='/'
            render={ () => (
              <Dashboard
                advice={this.state.advice}
                catPicture={this.state.cat}
                getData={this.updateHomeDisplay}
                addFavorite={this.addToFavoriteList}
              />
            )}
          />
          <Route 
            exact path='/:favorites'
            render={ () => (
              <FavoriteList
                // advice={this.state.advice}
                // catPicture={this.state.cat}
                favorites={this.state.favorites}
              />
            )}
          />
        </Switch>
        <Redirect to='/' />
      </main>
    )
  }
}

export default App;
