import React from 'react';

// Need to install and import the react-router-dom module
import {
    BrowserRouter as Router,    // Uses HTML5 history API to keep UI in sync with URL
    Route,                      // Render some UI whe location matches route's path
    Link,
    Switch                    // Provides declarative, accesible navigation around the app
} from 'react-router-dom';

import PlayerAPI from './PlayersAPI';

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
    </Router>
);

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/squad">Squad</Link></li>
                <li><Link to="/results">Results</Link></li>
            </ul>
        </nav>
    </header>
);

// Main component renders one of the three provided routes (provided there is a match)
// Both /squad and /results will match ANY pathname that starts with /squad or /results
// The / route will only match when the pathname is exactly the string "/"
// Switch - Switch renders the first child (Route or Redirect) that matches the location

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/squad" component={Squad} />
            <Route path="/results" render={() => <Results results="bob" />} />
        </Switch>
    </main>
);

const Home = () => (
    <div>
      <h1>Welcome to the React United Website!</h1>
    </div>
);

const Squad = () => (
    <React.Fragment>
        <h1>React United Players</h1>
        <Switch>
            <Route exact path="/squad" component={SquadList} />
            <Route path="/squad/:number" component={Player} />
        </Switch>
    </React.Fragment>
);

const Results = () => (
    <div>
      <ul>
        <li>React United 3 - 0 Angular Juniors</li>
        <li>Ember Town 2 - 2 React United</li>
        <li>React United 1 - 3 JS Meteors</li>
      </ul>
    </div>
);

// SquadList iterates over all the players and creates a link
// to their profile page
const SquadList = () => (
    <div>
      <ul>
        {
          PlayerAPI.all().map(p => (
            <li key={p.number}>
              <Link to={`/squad/${p.number}`}>{p.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
);

const Player = (props) => {
    const player = PlayerAPI.get(parseInt(props.match.params.number, 10));

    if(!player) {
        return (
            <div>Sorry, we must have transferred that player!</div>
        )
    }
    return (
        <div>
            <h1>{player.name} (Squad Number: {player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to="/squad">Back</Link>
        </div>
    );
};

export default App;