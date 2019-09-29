import React from "react";
import "./App.css";
import SocialCard from "./components/SocialCard";
import { socialUsers } from "./helpers";

function App() {
  return (
    <div className="App">
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
              type={socialUser.type}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
