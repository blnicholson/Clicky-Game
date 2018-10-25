import React, { Component } from "react";
import FalloutCard from "./components/FalloutCard";
import Navbar from "./components/Navbar";
import Wrapper from"./components/Wrapper";
//import Title from "./components/Title";
import fallCards from "./fallCards.json";
import "./App.css";

class App extends Component {
  //Setting this.state.fallout to the fallout json
  state = {
    fallCards
    // playerScore: 0,
    // highScore: 0,
    // clickedCard: [],
    // rightWrong:""
  };

  render() {
    return (
     <Wrapper>
        <Navbar
          FallOut
          // title="Welcome to the Fallout!"
          // playerScore = {this.state.playerScore}
          // highScore = {this.state.highScore}
          // rightWrong = {this.state.rightWrong}
        />
        <div className="container">
          <div className="row">
              {this.state.fallCards.map(fallCard => (
            <div className = "col-md-4">
                <FalloutCard
                  id={fallCard.id}
                  key={fallCard.id}
                  // name={fallCard.name}
                  image={fallCard.image}
                />
              </div>
              ))}
            </div>
          </div>
      </Wrapper> //closing div
    );
  }
}

export default App;
