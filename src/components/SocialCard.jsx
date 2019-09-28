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

  time = () => {
    let cardTime = new Date(this.props.time);
    let cardMonth = cardTime.getMonth() + 1;
    let cardDay = cardTime.getDate();
    let cardYear = cardTime.getFullYear();
    let cardHours = cardTime.getHours();
    let cardMinutes = cardTime.getMinutes();
    let cardSeconds = cardTime.getSeconds();

    console.log(cardMonth + "/" + cardDay + "/" + cardYear);

    let currentTime = new Date();
    let currentMonth = currentTime.getMonth() + 1;
    let currentDay = currentTime.getDate();
    let currentYear = currentTime.getFullYear();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    console.log(currentMonth + "/" + currentDay + "/" + currentYear);

    if (
      currentYear === cardYear &&
      currentMonth === cardMonth &&
      currentDay === cardDay
    ) {
      if (
        currentHours * 60 + currentMinutes - (cardHours * 60 + cardMinutes) <
        60
      ) {
        if (
          currentMinutes * 60 +
            currentSeconds -
            (cardMinutes * 60 + cardSeconds) <
          60
        ) {
          return (
            currentMinutes * 60 +
            currentSeconds -
            (cardMinutes * 60 + cardSeconds) +
            " sec"
          );
        }
        return (
          currentHours * 60 +
          currentMinutes -
          (cardHours * 60 + cardMinutes) +
          " min"
        );
      }
      return "Today";
    }

    if (
      currentYear === cardYear &&
      currentMonth === cardMonth &&
      currentDay === cardDay + 1
    ) {
      return "Yesterday";
    }

    return cardMonth + "/" + cardDay + "/" + cardYear;
  };

  render() {
    return (
      <div className="card-outer flex">
        <div className="card flex">
          <div className="user-time">
            <div className="user">{this.props.name}</div>
            <div className="time">{this.time()}</div>
          </div>
          <div className="image">
            <img src={this.props.image} alt="" />
          </div>
          {this.likes()}
          <div className="description">{this.props.description}</div>
          <p className="tags">{this.props.tags}</p>
          <div className="links">{this.props.links}</div>
        </div>
      </div>
    );
  }
}
