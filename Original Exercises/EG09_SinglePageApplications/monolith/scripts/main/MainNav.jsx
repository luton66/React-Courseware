import React from 'react';
import { Link } from 'react-router-dom';

export function MainNav() {
  return (
      <nav className="top-bar-right" id="menu">
        <h6 className="hide">Site navigation</h6>
        <ul className="vertical medium-horizontal menu">
          <li><Link className="pageLink" to="/">Home</Link></li>
          <li><Link className="pageLink" to="/films">Films</Link></li>
          <li><Link className="pageLink" to="/actors">Actors</Link></li>
        </ul>
      </nav>
  );
}
