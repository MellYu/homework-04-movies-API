import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Homepage/Home.js';
import MovieDetails from './MovieDetails/MovieDetails.js';
import Navigation from './Navigation/Navigation.js';
import Movies from './Movies/Movies.js';
import NonFoundPage from './NonFoundPage/NonFoundPage.js';
import routes from './../routes.js';

const App = () => (
    <>
    <Navigation/>
    <Switch>
    <Route path={routes.home} exact component={Home}/>
    <Route path={routes.movies} exact component={Movies}/>
    <Route path={routes.moviesDetails} component={MovieDetails}/>
    <Route component={NonFoundPage}/>
    </Switch>
    </>
  );

  export default App;
  
