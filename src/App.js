import React, { Component } from "react";
import Menu from "./components/Menu";
import SocialCard from "./components/SocialCard";
import { socialUsers } from "./helpers";
import "./App.css";

export default class App extends Component {
  state = { view: "Medium" };

  changeView = e => {
    const button = e.target;
    this.setState({ view: button.innerText });
    const siblings = [...e.target.parentElement.children];
    siblings.forEach(btn => btn.classList.remove("active-view"));
    button.classList.add("active-view");
  };

  render() {
    return (
      <div className="App">
        <Menu changeView={this.changeView} />
        <div className="socialUsers">
          {socialUsers.map(socialUser => {
            return (
              <SocialCard
                user={socialUser.user}
                time={socialUser.time}
                image={socialUser.image}
                likes={socialUser.likes}
                desc={socialUser.description}
                tags={socialUser.tags}
                view={this.state.view}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
