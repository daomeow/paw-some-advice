import './App.css';
import React, { Component } from 'react';
import { getData } from '../../apiCalls';
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard';
import FavoriteList from '../FavoriteList/FavoriteList';
import { Route, Switch, Redirect } from 'react-router-dom';

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
        this.setState({ advice:data[0].slip.advice, cat: data[1].webpurl} )
      })
    .catch(error => this.setState({ error: 'Something went wrong' }))
  }

  addToFavoriteList = () => {
    if (this.state.advice && this.state.cat) {
      var joined = this.state.favorites.concat({ advice: this.state.advice, cat: this.state.cat, id: Date.now() });
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
            render={() => (
              !this.state.favorites.length && !this.state.error ?
              <h2>Loading favorites..</h2>
              : this.state.error && !this.state.favorites.length ?
              <h2>{this.state.error}</h2>
              :<FavoriteList
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
