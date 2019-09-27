import React, { Component } from "react";
import "../css/social-card.css";

export default class SocialCard extends Component {
  render() {
    return (
      <div className="card-outer center-text">
        <div className="card flex">
          <div className="user-time">
            <div className="user">Kristijan</div>
            <div className="time">3 min</div>
          </div>
          <div className="image"></div>
          <div className="likes">❤ 35k Likes</div>
          <div className="description">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
              ipsam! Facilis exercitationem architecto possimus quas magni
              repellendus consequuntur praesentium quis.
            </p>
          </div>
          <div className="links"></div>
        </div>
      </div>
    );
  }
}
