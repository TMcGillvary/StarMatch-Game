import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Game from './Game';
import styled, { createGlobalStyle } from 'styled-components';

// removed the old styling for resetGame() and replaced by mounting and unmounting the Game component
const StarMatch = (props: {playerName: string}) => {
  const [gameID, setGameID] = useState(1);
  const location = useLocation();
  const playerName = location.state;
  const navigate = useNavigate();

  return (
    <>
    <GlobalStyle />
      <Title><span>Welcome, Player {playerName}</span></Title>
      <Game key={gameID} startNewGame={() => setGameID(gameID + 1)} />

      <br />
      <DivWrap>
      <GoBack onClick={() => navigate(-1)}>Go Back</GoBack>
      </DivWrap>
    </>
  );
}

export default StarMatch;

const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  font: 62.5%/1 "Lucida Sans Unicode","Lucida Grande",Verdana,Arial,Helvetica,sans-serif;
  background: #f5f5f5 url(https://s.cdpn.io/79/light-beams.jpg) no-repeat center center;
}

body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`
const Title = styled.div`
font-family: Helvetica, Geneva, sans-serif; 
font-size: 6em;

&:focus {
    outline: none;
}

& #title > span {
    vertical-align: middle;
    line-height: 1.5em;
}
`

const DivWrap = styled.div`
text-align: center;
`

const GoBack = styled.button`
    background: #000;
    font-size: 1.5rem;
    line-height: 1;
    margin: 0.5em;
    padding: 0.5em 2em;
    color: #fff;
    transition: 0.25s;
  
    &:hover, &:focus { 
    box-shadow: inset -8em 0 0 0 red;
    color: #fff;
    cursor: pointer;
  }
`