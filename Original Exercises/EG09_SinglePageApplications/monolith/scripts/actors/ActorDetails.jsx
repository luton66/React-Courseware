import React from 'react';

const actors = [
  {actor_name : "Harrison Ford", character_name : "Han Solo", bio : "Harrison Ford (born July 13, 1942) is an American actor and film producer. He gained worldwide fame for his starring roles as Han Solo in the original Star Wars epic space opera trilogy and the title character of the Indiana Jones film series. Ford is also known for his roles as Rick Deckard in the neo-noir dystopian science fiction film Blade Runner (1982), John Book in the thriller Witness (1985), and Jack Ryan in the action films Patriot Games (1992) and Clear and Present Danger (1994). Most recently, Ford reprised his role of Han Solo in Star Wars: The Force Awakens (2015)."},
  {actor_name : "Mark Hamill", character_name : "Luke Skywalker", bio : "Mark Richard Hamill (born September 25, 1951) is an American actor, voice actor and writer. He is known for his portrayal of Luke Skywalker in the Star Wars film series. Hamill also starred in the films Corvette Summer (1978), The Big Red One (1980), and Kingsman: The Secret Service (2015). His extensive voice acting work includes a long-standing role as the Joker, commencing with Batman: The Animated Series in 1992."},
  {actor_name : "Carrie Fisher", character_name : "Princess Leia", bio : "Carrie Frances Fisher (born October 21, 1956) is an American actress and writer. She is best known for her role as Princess Leia in the original Star Wars trilogy (1977–83) and Star Wars: The Force Awakens (2015). Fisher is also known for her semi-autobiographical novels, including Postcards from the Edge, and the screenplay for the film of the same name, as well as her autobiographical one-woman play, and its nonfiction book, Wishful Drinking, based on the show. Her other film roles include Shampoo (1975), The Blues Brothers (1980), Hannah and Her Sisters (1986), The 'Burbs (1989), and When Harry Met Sally... (1989)."}
];

export default class ActorDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      actor_name: actors[0].actor_name,
      character_name : actors[0].character_name,
      bio : actors[0].bio
    };
  }

  componentWillReceiveProps(nextProps) {
    let name = nextProps.match.params.actorName;
    let index = this.getActorIndex(name);
    this.setActorDetails(index);
  }

  getActorIndex(actorName) {
    let actorIndex = 0;
    for(let i = 0; i < actors.length; i++) {
      if((actors[i].actor_name).replace(/\s+/g, '') === actorName) {
        actorIndex = i;
        break
      }
    }
    return actorIndex;
  }

  setActorDetails(index) {
    this.setState( {
      actor_name: actors[index].actor_name,
      character_name : actors[index].character_name,
      bio : actors[index].bio
    } );
  }

  render() {
    let actorComponent = actors.map(actor => (
      <div key={actor.actor_name}>
        <h3>{actor.actor_name}</h3>
        <h4>Character Played: {actor.character_name}</h4>
        <p>{actor.bio}</p>
      </div>
    ));

    console.log

    return (
      <React.Fragment>
          {/* <div>
            <h3>{this.state.actor_name}</h3>
            <h4>Character Played: {this.state.character_name}</h4>
            <p>{this.state.bio}</p>
          </div> */}
        {actorComponent}
      </React.Fragment>
      
    );
  }
}
