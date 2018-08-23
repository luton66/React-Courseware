import React from 'react';

export default class CurrentLocation extends React.Component {

  toggleFavourite() {
    this.props.onFavouriteToggle(this.props.address);
  }

  render() {

    let favouriteClassName = '';

    if(this.props.address !== "Location not found") {
      if(this.props.favourite) {
        favouriteClassName = "glyphicon glyphicon-star";
      }
      else {
        favouriteClassName = "glyphicon glyphicon-star-empty";
      }
    }
    return (
      <div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
        <h4 id="save-location">{this.props.address}</h4>
        <span className={favouriteClassName} onClick={this.toggleFavourite.bind(this)} aria-hidden="true"></span>
      </div>
    )
  }
}
