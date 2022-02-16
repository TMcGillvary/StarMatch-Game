import React, { useState, useEffect } from 'react';
import utils from '../Math-utils';
import StarsDisplay from './StarsDisplay';
import ButtonNumDisplay from './ButtonNumDisplay';
import PlayAgain from './PlayAgain';

// Custom Hook
const useGameState = (buttonNums: Array<number>) => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(buttonNums);
    const [candidateNums, setCandidateNums] = useState<Array<number>>([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    // if you use a side effect, you should always return a clean up of the effect
    // there is a bug here where repeatedly clicking a button stalls the timer... the tutorial skips fixing it
    // fixed it by adding dependencies for useEffect? but based on the explanation I watched on useEffect
    // I don't understand why adding the dependencies fixes it
    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
            return () => clearTimeout(timerId);
        }
    }, [availableNums.length, secondsLeft]);

    const setGameState = (newCandidateNums: Array<number>) => {
        // if not a correct answer
        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            // if the answer IS correct:
            // create a new array of availableNums with the candidates removed
            const newAvailableNums = availableNums.filter(
                num => !newCandidateNums.includes(num)
            );
            // redraw the stars from what's available
            setStars(utils.randomSumIn(newAvailableNums, 9));
            // set that as the newAvailableNums array
            setAvailableNums(newAvailableNums);
            // reset candidates back to empty
            setCandidateNums([]);
        }
    };

    return { stars, availableNums, candidateNums, secondsLeft, setGameState };
};

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
    // const gameIsWon = availableNums.length === 0;
    // const gameIsLost = secondsLeft === 0;
    // I don't like the nested ternary here but the tutorial to show the different versions is locked behind a paywall T-T
    // and when I tried to get two ifs to work with newCandidateNums it threw an error, so I'm gonna leave this alone
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
        // tried to fix this so it wouldn't be a ternary operator; couldn't get it to work
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
             if (candidatesAreWrong) {
                 return 'wrong';
             } else {
                 return 'candidate';
             }
             //return candidatesAreWrong ? 'wrong' : 'candidate';
         }
         return 'available';
     };

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left-stars">
                    {gameStatus !== 'active' ? (
                        <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
                    ) : (
                        <StarsDisplay countOfStars={stars} />
                    )}
                </div>
                <div className="right-numbers">
                    {buttonNums.map(number =>
                        <ButtonNumDisplay
                            key={number}
                            number={number}
                            status={numberStatus(number)}
                            onClick={onNumberClick}
                        />
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
};

export default Game;