import React from "react";
import styled from 'styled-components';

// TODO: ask about the onClick event args
interface numInfo {
  status: keyof typeof colors,
  onClick: (number: number, currentStatus: string) => void,
  number: number,
}

const Button = styled.button`
    background-color: #eee;
    border: thin solid #ddd;
    width: 45px;
    height: 45px;
    margin: 10px;
    font-size: 25px;

    &:focus, &:active {
      outline: none;
      border: thin solid #ddd;
    }
`

/**
Display the numbers 1-9 as individual clickable buttons to match the star count on the left. 
the number is passed into the function as a prop to display, and on click sends the number and status back to parent component
*/
const ButtonNumDisplay = (props: numInfo) => (
  <Button
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </Button>
);

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default ButtonNumDisplay;