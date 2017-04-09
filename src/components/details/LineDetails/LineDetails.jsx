import React, { PropTypes } from "react";
import { SvgShape } from "units";
import { NumericInput, ColorPallete } from "components/inputs";
import * as colors from "data/colors";
import style from "./LineDetails.css";

const LineDetails = ({ data, onBlur }) => {
  return (
    <div className="details">
      <h4 className="LineDetails">Line Details</h4>
      <div className="inputs">
        <NumericInput
          name={data.name}
          attribute="x1"
          value={data.x1}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="y1"
          value={data.y1}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="x2"
          value={data.x2}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="y2"
          value={data.y2}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="strokeWidth"
          value={data.strokeWidth}
          onBlur={onBlur}
        />
      </div>
      <div className="colors">
        <span>fill</span>
        <ColorPallete
          name={data.name}
          attribute="stroke"
          value={data.stroke}
          pallete={Object.values(colors)}
          palletePicked={onBlur}
        />
      </div>
    </div>
  );
};

LineDetails.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  onBlur: PropTypes.func.isRequired
};

export default LineDetails;
