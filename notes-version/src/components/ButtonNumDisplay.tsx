import React from "react";

// TODO: ask about the onClick event args
interface numInfo {
  status: keyof typeof colors,
  onClick: (number: number, currentStatus: string) => void,
  number: number,
}

/**
Display the numbers 1-9 as individual clickable buttons to match the star count on the left. 
the number is passed into the function as a prop to display, and on click sends the number and status back to parent component
*/
const ButtonNumDisplay = (props: numInfo) => (
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