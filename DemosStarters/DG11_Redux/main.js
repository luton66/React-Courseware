// Make imports so that react and react-dom libraries can be used
import React from 'react';
import ReactDOM from 'react-dom';

// Use ReactDOM's render method
// It takes 2 arguments:
// 1 - Some html to display
// 2 - A target element in the DOM to display it in

ReactDOM.render(
    <h1>Hello, World!</h1>,         // HTML
    document.querySelector('#app')  // Target
);