import React from "react";
import utils from "../Math-utils";
import styled from 'styled-components';

//TODO found a bug here because of the countOfStars being set wrong

/**
Displays a random number of stars using the utils.range() function
for each turn of the game
*/
const StarsDisplay = (props: { countOfStars: Array<number>; }) => (
    <>
        {utils.range(1, props.countOfStars).map(starID =>
            <Star key={starID} />
        )}
    </>
);

export default StarsDisplay;

/* CSS STYLING */

const Star = styled.div`
    display: inline-block;
    margin: 0 15px;

    &:after {
        content: "\\2605";
        font-size: 45px;
    }
`