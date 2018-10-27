import React, { Component } from "react";
import FalloutCard from "./components/FalloutCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
//import Footer from "./components/Footer"
import fallCards from "./fallCards.json";
import "./App.css";

class App extends Component {
  //Setting this.state.fallout to the fallout.json
  state = {
    fallCards,
     playerScore: 0,
     highScore: 0,
     clickedCard: [],
     

  };

  //Card Shuffle 
  shuffleCards = fallCardArray => {
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = fallCardArray.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = fallCardArray[i];
      fallCardArray[i] = fallCardArray[j];
      fallCardArray[j] = temp;
    }
    return fallCardArray;
  };

  //Function for card shuffle
  handleShuffleCards = () => {
   let shufflesCards = this.shuffleCards(fallCards)
   this.setState({fallCards: shufflesCards})
  }

  //Cards will shuffle when clicked
  handleClickCard = id => {
  
    if(this.state.clickedCard.indexOf(id) === -1){
      this.handleAddScore();
      this.setState({clickedCard: this.state.clickedCard.concat(id)})
    } 
    else {
      this.handleGameReset();
    }
  };

  //Function to increment score
  handleAddScore = () => {
    const addScore = this.state.playerScore + 1;
    this.setState({playerScore: addScore})
    
    if (addScore >= this.state.highScore) {
      this.setState({highScore: addScore})
    }
    else if (addScore === 12) {
      alert("Congratulations, You Won! Please Play Again!")
    }
    this.handleShuffleCards();
  }

  //Function to reset game
  handleGameReset = () =>{
  alert("LOSER!!!")
  this.setState({playerScore: 0, highScore: this.state.highScore, clickedCard: []});
  this.handleShuffleCards();
   
  }

  render() {
    return (
      <Wrapper>
        <Title>Welcome to the Fallout!</Title>
         <h4>Click on an image to earn points, but don't click an image more than once!</h4>
        <br></br>
        <Navbar
          FallOut
           playerScore = {this.state.playerScore}
           highScore = {this.state.highScore}
           rightWrong = {this.state.winner}
        />
        <br></br>
        <div className="container">
          <div className="row">
            {this.state.fallCards.map(fallCard => (
              <div className="col-md-4">
                <FalloutCard
                  handleClickCard={this.handleClickCard}
                  handleAddScore={this.handleAddScore}
                  key={fallCard.id}
                  id={fallCard.id}
                  image={fallCard.image}
                />
              </div>
                ))}
          </div>
          </div>
         {/* <Footer></Footer> */}
      </Wrapper> //closing div
    );
  }
}

export default App;
