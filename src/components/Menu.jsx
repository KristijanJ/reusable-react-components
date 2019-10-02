import React, { Component } from "react";
import "../css/menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <h1>MENU</h1>
        <div className="change-view">
          <h3>Change view</h3>
          <div className="buttons">
            <p onClick={this.props.changeView}>Small</p>
            <p className="active-view" onClick={this.props.changeView}>
              Medium
            </p>
            <p onClick={this.props.changeView}>Large</p>
          </div>
        </div>
        <div className="users">
          {Object.keys(this.props.socialUsers).map(key => {
            return <p>{this.props.socialUsers[key].user}</p>;
          })}
        </div>
      </div>
    );
  }
}
