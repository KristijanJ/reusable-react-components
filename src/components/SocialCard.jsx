import React, { Component } from "react";
import "../css/social-card.css";

export default class SocialCard extends Component {
  likes = () => {
    if (this.props.likes >= 10000000) {
      return (
        <div className="likes">
          <span className="hearth">❤</span>
          <span>{Math.round(this.props.likes / 1000000)}M</span>
          <span>likes</span>
        </div>
      );
    } else if (this.props.likes > 999999) {
      return (
        <div className="likes">
          <span className="hearth">❤</span>
          <span>{(this.props.likes / 1000000).toFixed(2)}M</span>
          <span>likes</span>
        </div>
      );
    } else if (this.props.likes > 999) {
      return (
        <div className="likes">
          <span className="hearth">❤</span>
          <span>{Math.round(this.props.likes / 1000)}K</span>
          <span>likes</span>
        </div>
      );
    } else {
      return (
        <div className="likes">
          <span className="hearth">❤</span>
          <span>{this.props.likes}</span>
          <span>likes</span>
        </div>
      );
    }
  };

  time = () => {
    const cardTime = new Date(this.props.time);
    const cardTimeDetails = {
      month: cardTime.getMonth() + 1,
      day: cardTime.getDate(),
      year: cardTime.getFullYear(),
      hours: cardTime.getHours(),
      min: cardTime.getMinutes(),
      sec: cardTime.getSeconds()
    };

    const currentTime = new Date();
    const currentTimeDetails = {
      month: currentTime.getMonth() + 1,
      day: currentTime.getDate(),
      year: currentTime.getFullYear(),
      hours: currentTime.getHours(),
      min: currentTime.getMinutes(),
      sec: currentTime.getSeconds()
    };

    if (
      currentTimeDetails.year === cardTimeDetails.year &&
      currentTimeDetails.month === cardTimeDetails.month &&
      currentTimeDetails.day === cardTimeDetails.day
    ) {
      if (
        currentTimeDetails.hours * 60 +
          currentTimeDetails.min -
          (cardTimeDetails.hours * 60 + cardTimeDetails.min) <
        60
      ) {
        if (
          currentTimeDetails.min * 60 +
            currentTimeDetails.sec -
            (cardTimeDetails.min * 60 + cardTimeDetails.sec) <
          60
        ) {
          return (
            currentTimeDetails.min * 60 +
            currentTimeDetails.sec -
            (cardTimeDetails.min * 60 + cardTimeDetails.sec) +
            " sec"
          );
        }
        return (
          currentTimeDetails.hours * 60 +
          currentTimeDetails.min -
          (cardTimeDetails.hours * 60 + cardTimeDetails.min) +
          " min"
        );
      }
      return "Today";
    }

    if (
      currentTimeDetails.year === cardTimeDetails.year &&
      currentTimeDetails.month === cardTimeDetails.month &&
      currentTimeDetails.day === cardTimeDetails.day + 1
    ) {
      return "Yesterday";
    }

    return (
      cardTimeDetails.month +
      "/" +
      cardTimeDetails.day +
      "/" +
      cardTimeDetails.year
    );
  };

  render() {
    console.log(this.props.tags);
    if (this.props.view === "Small") {
      return (
        <div className="card card-s">
          <div className="top top-s">
            <div className="user user-s">{this.props.user}</div>
            <div className="time">{this.time()}</div>
          </div>
          <div className="image image-s">
            <img src={this.props.image} alt={this.props.user} />
          </div>
          <div className="likes likes-s">{this.likes()}</div>
          <div className="desc desc-s">{this.props.desc}</div>
        </div>
      );
    }
    if (this.props.view === "Medium") {
      return (
        <div className="card card-m">
          <div className="top top-m">
            <div className="user user-m">{this.props.user}</div>
            <div className="time">{this.time()}</div>
          </div>
          <div className="image image-m">
            <img src={this.props.image} alt={this.props.user} />
          </div>
          <div className="likes likes-m">{this.likes()}</div>
          <div className="desc">{this.props.desc}</div>
          <div className="tags">
            {this.props.tags.map(tag => {
              return <span>{tag} </span>;
            })}
          </div>
        </div>
      );
    }
    if (this.props.view === "Large") {
      return (
        <div className="card card-l">
          <div className="top top-l">
            <div className="user user-l">{this.props.user}</div>
            <div className="time">{this.time()}</div>
          </div>
          <div className="image image-l">
            <img src={this.props.image} alt={this.props.user} />
          </div>
          <div className="likes likes-l">{this.likes()}</div>
          <div className="desc">{this.props.desc}</div>
          <div className="tags">
            {this.props.tags.map(tag => {
              return <span>{tag} </span>;
            })}
          </div>
        </div>
      );
    }
  }
}
