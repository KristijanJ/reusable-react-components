import React, { Component } from "react";
import "../css/social-card.css";

export default class SocialCard extends Component {
  likes = () => {
    if (this.props.likes) {
      return (
        <div className="likes">
          <span className="hearth">❤</span>
          <span>{this.props.likes}</span>
          <span>likes</span>
        </div>
      );
    } else {
      return "";
    }
  };

  render() {
    return (
      <div className="card-outer center-text flex">
        <div className="card flex">
          <div className="user-time">
            <div className="user">{this.props.name}</div>
            <div className="time">{this.props.time}</div>
          </div>
          <div className="image">
            <img src={this.props.image} alt="" />
          </div>
          {this.likes()}
          {this.props.description}
          <div className="links">{this.props.links}</div>
        </div>
      </div>
    );
  }
}
