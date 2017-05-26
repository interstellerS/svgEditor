import React, { PropTypes } from "react";
import style from "./AlignDetails.css";
import { ALIGN } from "redux/constants/dndConstants";

function renderAlignTool(item) {
  let jsx;
  switch (item) {
    case ALIGN.LEFT:
      jsx = (
        <svg
          fill="black"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 2 1 L 2 5 L 14 5 L 14 11 L 2 11 L 2 16 L 20 16 L 20 22 L 2 22 L 2 26 L 1 26 L 1 1 L 2 1 ZM 27 0 L 0 0 L 0 27 L 27 27 L 27 0 Z"
            fill="white"
          />
        </svg>
      );
      break;
    case ALIGN.CENTER:
      jsx = (
        <svg
          fill="black"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 13 1 L 14 1 L 14 6 L 22 6 L 22 12 L 14 12 L 14 15 L 19 15 L 19 21 L 14 21 L 14 26 L 13 26 L 13 21 L 8 21 L 8 15 L 13 15 L 13 12 L 5 12 L 5 6 L 13 6 L 13 1 ZM 0 0 L 0 27 L 27 27 L 27 0 L 0 0 Z"
            fill="white"
          />
        </svg>
      );
      break;
    case ALIGN.RIGHT:
      jsx = (
        <svg
          fill="black"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 25 1 L 25 5 L 13 5 L 13 11 L 25 11 L 25 16 L 7 16 L 7 22 L 25 22 L 25 26 L 26 26 L 26 1 L 25 1 ZM 0 0 L 27 0 L 27 27 L 0 27 L 0 0 Z"
            fill="white"
          />
        </svg>
      );
      break;
    case ALIGN.TOP:
      jsx = (
        <svg
          fill="black"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 1 2 L 5 2 L 5 14 L 11 14 L 11 2 L 16 2 L 16 20 L 22 20 L 22 2 L 26 2 L 26 1 L 1 1 L 1 2 ZM 0 27 L 0 0 L 27 0 L 27 27 L 0 27 Z"
            fill="white"
          />
        </svg>
      );
      break;
    case ALIGN.MIDDLE:
      jsx = (
        <svg
          fill="black"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 26 13 L 26 14 L 21 14 L 21 22 L 15 22 L 15 14 L 12 14 L 12 19 L 6 19 L 6 14 L 1 14 L 1 13 L 6 13 L 6 8 L 12 8 L 12 13 L 15 13 L 15 5 L 21 5 L 21 13 L 26 13 ZM 27 0 L 0 0 L 0 27 L 27 27 L 27 0 Z"
            fill="white"
          />
        </svg>
      );
      break;
    case ALIGN.BOTTOM:
      jsx = (
        <svg
          fill="black"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 1 25 L 5 25 L 5 13 L 11 13 L 11 25 L 16 25 L 16 7 L 22 7 L 22 25 L 26 25 L 26 26 L 1 26 L 1 25 ZM 0 0 L 0 27 L 27 27 L 27 0 L 0 0 Z"
            fill="white"
          />
        </svg>
      );
      break;
    default:
  }
  return jsx;
}

const AlignDetails = ({ alignPicked }) => {
  return (
    <div className="alignInputs">
      <span className="attribute"> Align </span>
      <div className="alignDetails">
        <div onClick={() => alignPicked(ALIGN.LEFT)}>
          {renderAlignTool(ALIGN.LEFT)}
        </div>
        <div onClick={() => alignPicked(ALIGN.CENTER)}>
          {renderAlignTool(ALIGN.CENTER)}
        </div>
        <div onClick={() => alignPicked(ALIGN.RIGHT)}>
          {renderAlignTool(ALIGN.RIGHT)}
        </div>
        <div onClick={() => alignPicked(ALIGN.TOP)}>
          {renderAlignTool(ALIGN.TOP)}
        </div>
        <div onClick={() => alignPicked(ALIGN.MIDDLE)}>
          {renderAlignTool(ALIGN.MIDDLE)}
        </div>
        <div onClick={() => alignPicked(ALIGN.BOTTOM)}>
          {renderAlignTool(ALIGN.BOTTOM)}
        </div>
      </div>
    </div>
  );
};

AlignDetails.propTypes = {
  alignPicked: PropTypes.func.isRequired
};

export default AlignDetails;
