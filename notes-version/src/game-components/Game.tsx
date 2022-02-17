import React from 'react';
import utils from '../Math-utils';
import StarsDisplay from './StarsDisplay';
import ButtonNumDisplay from './ButtonNumDisplay';
import PlayAgain from './PlayAgain';
import useGameState from './useGameState';
import style from "styled-components";


// TODO: still unfamiliar with the React types and typescript, this is what VSCode generated to fix, does this look right?
const Game = (props: { startNewGame: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => {
    // creates an array 1-9 of numbered buttons
    const buttonNums = utils.range(1, 9);

    // uses the Custom Hook to handle the state and effects of the game
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState,
    } = useGameState(buttonNums);

    // game is done when available numbers reaches 0
    const gameStatus = availableNums.length === 0
        ? 'won'
        : secondsLeft === 0 ? 'lost' : 'active';

    // based on the current status of the number, what is the new status of the number?
    const onNumberClick = (number: number, currentStatus: string) => {
        if (gameStatus !== 'active' || currentStatus === 'used') {
            // do nothing; can't select an already used num
            return;
        }

        // add the selected number to the candidates array
        const newCandidateNums =
            currentStatus === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number);

        setGameState(newCandidateNums);
    };

     // determine whether the candidate numbers chosen are incorrect, returns a boolean
     const candidatesAreWrong = utils.sum(candidateNums) > stars;
    
     // determines what playable status the button is
     const numberStatus = (number: number) => {
         if (!availableNums.includes(number)) {
             return 'used';
         }
         if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
         }
         return 'available';
     };

    return (
        <Container>
            <Help>
                Pick 1 or more numbers that sum to the number of stars
            </Help>
            <Body>
                <LeftStars>
                    {gameStatus !== 'active' ? (
                        <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
                    ) : (
                        <StarsDisplay countOfStars={stars} />
                    )}
                </LeftStars>
                <RightNums>
                    {buttonNums.map(number =>
                        <ButtonNumDisplay
                            key={number}
                            number={number}
                            status={numberStatus(number)}
                            onClick={onNumberClick}
                        />
                    )}
                </RightNums>
            </Body>
            <Timer>Time Remaining: {secondsLeft}</Timer>
        </Container>
    );
};

export default Game;

/* CSS STYLING */

const Container = style.div`
    max-width: 500px;
    margin: 0 auto;
`
const Body = style.div`
    display: flex;
`
const Help = style.div`
    color: #666;
    margin: 10px;
    text-align: center;
    font-size: 1.7rem;
`
const LeftStars = style.div`
    text-align: center;
    width: 50%;
    border: thin solid #ddd;
`
const RightNums = style.div`
    text-align: center;
    padding: 10px;
    width: 50%;
    border: thin solid #ddd;
`
const Timer = style.div`
    color: #666;
    margin-top: 3px;
    margin-left: 3px;
    font-size: 2rem;
`