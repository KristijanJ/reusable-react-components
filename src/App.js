import React from "react";
import "./App.css";
import SocialCard from "./components/SocialCard";
import { socialUsers } from "./helpers";

function App() {
  return (
    <div className="App">
      {socialUsers.map(socialUser => {
        return (
          <SocialCard
            name={socialUser.name}
            time={socialUser.time}
            image={socialUser.image}
            likes={socialUser.likes}
            description={socialUser.description}
            tags={socialUser.tags}
          />
        );
      })}
    </div>
  );
}
export default App;
