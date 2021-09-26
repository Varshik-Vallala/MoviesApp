import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import Popular from './components/Popular'
import MovieDetails from './components/MovieDetails'
import Account from './components/Account'
import Search from './components/Search'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Profiles from './components/Profiles'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <Route exact path="/movie/:id" component={MovieDetails} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/search/" component={Search} />
    <ProtectedRoute exact path="/profiles" component={Profiles} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
