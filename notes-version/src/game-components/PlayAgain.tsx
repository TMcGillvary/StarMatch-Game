import React from "react";
import styled from "styled-components";

const Message = styled.div`
    font-size: 250%;
    font-weight: bold;
    margin: 15px;
`

/**
Render a Play Again button once game is completed
*/
const PlayAgain = (props: { gameStatus: string; onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => (
    <div id="game-done">
        <Message 
            style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
        >
            {props.gameStatus === 'lost' ? 'Game Over' : 'You Won!'}
        </Message>
        <button onClick={props.onClick}>Play Again</button>
    </div>
);

export default PlayAgain;