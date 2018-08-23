import React from 'react';
import ReactDOM from 'react-dom';

// Need to install and import the react-router-dom module
import {
    BrowserRouter as Router,    // Uses HTML5 history API to keep UI in sync with URL
    Route,                      // Render some UI whe location matches route's path
    Link                        // Provides declarative, accesible navigation around the app
} from 'react-router-dom';

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);