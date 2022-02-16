import React from "react";

// TODO: ask about the onClick event args
/**
Display the numbers 1-9 as clickable buttons to match the star count on the left. 
the number range is passed into the function as a prop to display, and on click sends the number and status back to parent component
*/
const ButtonNumDisplay = (props: { status: string; onClick: (arg0: number, arg1: string) => void; number: number; }) => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status as keyof typeof colors] }}
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