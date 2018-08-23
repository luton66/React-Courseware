import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';

/* NOTES:
    BrowserRouter - a <Router> that uses HTML5 history API
    Router - common low-level interface for all router components
    Route - Most important to understand and learn to use well - most basic responsibility
            is to render some UI when a location matches the route's path
    Switch - Renders the first child (Route or Redirect) that matches the location
    Link - Provides declarative, accessible navigation around app
*/

ReactDOM.render(
    <App />,
    document.querySelector("#app")
);