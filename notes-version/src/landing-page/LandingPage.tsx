import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function HomePage() {

    const [playerName, setPlayerName] = useState("");
    const navigate = useNavigate();


    return (
            <Wrapper>
                <h1>Star Matcher Game!</h1>
                <input type="text"
                    placeholder="Enter Your Name!"
                    value={playerName}
                    onChange={event => {
                        setPlayerName(event.target.value)}
                    }
                />
                <br />
                Your Name: {playerName}
                <br />
                <button onClick={() => navigate("/game", { state: playerName})} key={playerName} >
                    Play Game!
                </button>
            </Wrapper>
    )
}

export default HomePage;

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
`