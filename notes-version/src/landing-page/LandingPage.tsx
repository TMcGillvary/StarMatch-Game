import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from "styled-components";

function HomePage() {

    const [playerName, setPlayerName] = useState("");
    const navigate = useNavigate();


    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <StarsBanner>
                    <Stars>&#9733;</Stars>
                    <Stars>&#9733;</Stars>
                    <Stars>&#9733;</Stars>
                    <Stars>&#9733;</Stars>
                    <Stars>&#9733;</Stars>
                </StarsBanner>
                <Title id="title"><span>Star Matcher Game!</span></Title>
                <P>
                Enter Your Name to Play:
                </P>
                <input type="text"
                    placeholder="Enter Your Name!"
                    value={playerName}
                    onChange={event => {
                        setPlayerName(event.target.value)
                    }
                    }
                />
                <P>
                Your Name: {playerName}
                </P>
                
                <PlayButton 
                    onClick={() => {
                        navigate("/game", { state: playerName }); 
                        //setPlayerName("");
                    }} 
                    key={playerName} 
                    disabled={playerName.length <= 0} 
                >
                &#9733; Play Game! &#9733;
                </PlayButton>
            </Wrapper>
        </>
    )
}

export default HomePage;

/* CSS STYLING */

const GlobalStyle = createGlobalStyle`
html {
  font: 62.5%/1 "Lucida Sans Unicode","Lucida Grande",Verdana,Arial,Helvetica,sans-serif;
}

span {
    text-shadow: -0.06em 0 red,  0.06em 0 red; 
    letter-spacing: 0.08em; 
}
`

const Wrapper = styled.div`
min-height: 100vh;
background: #212534;
display: flex;
align-items: center;
flex-direction: column;
padding-top: 2rem;
padding-bottom: 2rem;
box-sizing: border-box;
color: #fff;
font-weight: bold;
font-size: 10em;
`

const StarsBanner = styled.span``

const starsAnimate = keyframes`
    0% { transform: scale(1); }
    90% { transform: scale(1); }
    95% { transform: scale(1.3); }
    100% { transform: scale(1); }
`

const Stars = styled.span`
display: inline-block;
transform: scale(1);
transition: transform 2s cubic-bezier(0, 1, 0, 1);
animation: ${starsAnimate} 3s 50 ease-in-out;

&:hover {
cursor: crosshair;
transform: scale(1.3); /* This adds a hover effect */
transition: transform .2s cubic-bezier(0, 0.75, 0, 1);
}

/* Below the stars animation */
&:nth-child(1), &:nth-child(5) { 
    font-size: 0.3em; animation-delay: 0.2s; 
}
&:nth-child(2), &:nth-child(4) { 
    font-size: 0.5em; animation-delay: 0.1s; 
}
&:nth-child(3) { 
    font-size: 0.8em; animation-delay: 0s; 
}
`

const Title = styled.div`
font-family: Helvetica, Geneva, sans-serif; 

&:focus {
    outline: none;
}

& #title > span {
    vertical-align: middle;
    line-height: 1.5em;
    transition: font-size 2s cubic-bezier(0, 1, 0, 1);
}
`

const P = styled.p`
font-size: 0.25em;
`

const PlayButton = styled.button`
    background: none;
    border: 2px solid red;
    font-size: 0.25em;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    color: #fff;
    transition: 0.25s;

    &:disabled {
        color: darkgrey;
        border: 2px solid;
        pointer-events: none;
    }
  
    &:hover, &:focus { 
    box-shadow: 1px 15px 12px 2px red;
    color: #fff;
    transform: translateY(-0.25em);
    cursor: pointer;
  }
`