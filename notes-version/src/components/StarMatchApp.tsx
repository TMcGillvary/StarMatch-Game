import '../styles/StarMatch.css';
import React, { useState } from 'react';
import Game from './Game';

// removed the old styling for resetGame() and replaced by mounting and unmounting the Game component
const StarMatch = () => {
  const [gameID, setGameID] = useState(1);
  return <Game key={gameID} startNewGame={() => setGameID(gameID + 1)} />;
}


export default StarMatch;
