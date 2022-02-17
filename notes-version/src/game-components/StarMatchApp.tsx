import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Game from './Game';

// removed the old styling for resetGame() and replaced by mounting and unmounting the Game component
const StarMatch = (props: {playerName: string}) => {
  const [gameID, setGameID] = useState(1);
  const location = useLocation();
  const playerName = location.state;
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome, Player {playerName}</h1>
      <Game key={gameID} startNewGame={() => setGameID(gameID + 1)} />

      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}


export default StarMatch;
