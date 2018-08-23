// Demo Instruction 28
import React from 'react';

// Want to be able to connect this component to Redux
import { connect } from 'react-redux';

// Want to get a list of articles - connect state.articles with component
// use mapStateToProps
const mapStateToProps = state => {
    return {
        articles: state.articles
    };
}

// ConnectedList component receives a prop articles which is copy of articles array
// It comes from rootReducer
const ConnectedList = ( {articles} ) => (
    <ul>
        {articles.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
);

// Connect function use to pass articles to stateless component ConnectedList
const List = connect(mapStateToProps)(ConnectedList);

export default List;
