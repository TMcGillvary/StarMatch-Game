import { useState, useEffect } from 'react';
import utils from '../Math-utils';


// Custom Hook
const useGameState = (buttonNums: Array<number>) => {
    const [stars, setStars] = useState<Array<number>>(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(buttonNums);
    const [candidateNums, setCandidateNums] = useState<Array<number>>([]);
    const [secondsLeft, setSecondsLeft] = useState(10);
    // TODO best practice with typescript to still declare even if react/ts knows?

    // if you use a side effect, you should always return a clean up of the effect
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

export default useGameState;