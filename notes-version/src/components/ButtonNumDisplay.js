import React from "react";

/**
Display the numbers 1-9 as clickable buttons to match the star count on the left. 
the number range is passed into the function as a prop to display, and on click sends the number and status back to parent component
*/
const ButtonNumDisplay = props => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default ButtonNumDisplay;