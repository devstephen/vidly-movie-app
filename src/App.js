import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Movies from './components/Movies'
import MovieForm from './components/MovieForm'
import Customers from './components/Customers'
import Rentals from './components/Rentals'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className='container'>
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/movies/:id' component={MovieForm} />
            <Route path='/movies' component={Movies} />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}

export default App
