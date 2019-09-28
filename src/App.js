import React from "react";
import "./App.css";
import SocialCard from "./components/SocialCard";

function App() {
  return (
    <div className="App">
      <SocialCard
        name="john842"
        time="3 min"
        image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        likes="35k"
        description={
          <div className="description">
            <p>I look awesome in this photo. Gimme likes!!!</p>
            <p className="tags">
              #great #goals #motivation #spirit #lifegoals2020 #spiritual
              #cactus
            </p>
          </div>
        }
      />
      <SocialCard
        name="jesiccaSimpson88"
        time="25/06/2019"
        image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        likes="6k"
        description={
          <div className="description">
            <p>
              Thanks to Tim for this amazing photograph. Anyone else in need of
              an amazing photograph, contact Tim Burton.
            </p>
            <p className="tags">#holy #awesome #sauce #timburton</p>
          </div>
        }
      />
      <SocialCard
        name="TimBurton"
        time="1 hour"
        image="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        likes="268"
        description={
          <div className="description">
            <p>My travels to Alaska. Such a beautiful country</p>
            <p className="tags">#idontlikethis #alaska #wtf</p>
          </div>
        }
      />
    </div>
  );
}
export default App;
