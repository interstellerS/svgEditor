import React, { PropTypes } from "react";

//https://materialdesignicons.com/icon/cursor-move

export default function IconRectangle() {
  return (
    <svg
      fill="rgb(102, 102, 102)"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"
      />
    </svg>
  );
}

IconRectangle.propTypes = {};
