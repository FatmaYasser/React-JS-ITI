import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import NotFound from './NotFound';
import Logone from './Logone'
import Blog from './Blog'
import About from './About';


export const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="Logone" component={Logone} />
        <Route path="home" component={Home} />
        <Route path="about" component={About} />
        <Route path="blog" component={Blog} />
        <Route path="**" component={NotFound} />
    </Route>
);