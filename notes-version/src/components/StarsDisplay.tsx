import React from "react";
import utils from "../Math-utils";

/**
Displays a random number of stars using the utils.range() function
for each turn of the game
*/
const StarsDisplay = (props: { countOfStars: Array<number>; }) => (
    <>
        {utils.range(1, props.countOfStars).map(starID =>
            <div key={starID} className="star" />
        )}
    </>
);

export default StarsDisplay;