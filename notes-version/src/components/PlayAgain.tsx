import React from "react";

/**
Render a Play Again button once game is completed
*/
const PlayAgain = (props: { gameStatus: string; onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => (
    <div className="game-done">
        <div
            className="message"
            style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
        >
            {props.gameStatus === 'lost' ? 'Game Over' : 'You Won!'}
        </div>
        <button onClick={props.onClick}>Play Again</button>
    </div>
);

export default PlayAgain;