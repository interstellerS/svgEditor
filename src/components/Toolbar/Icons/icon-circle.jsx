import React, { PropTypes } from "react";

//https://materialdesignicons.com/icon/cursor-move

export default function IconCircle(props) {
  return (
    <svg
      fill="rgb(102, 102, 102)"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 24H0V0h24v24z" fill="none" />
      <circle cx="12" cy="12" fill={props.color} r="8" />
    </svg>
  );
}

IconCircle.propTypes = {};
