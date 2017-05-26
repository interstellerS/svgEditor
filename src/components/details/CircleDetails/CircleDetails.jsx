import React, { PropTypes } from "react";
import { SvgShape } from "units";
import { NumericInput, ColorPallete } from "components/inputs";
import * as colors from "data/colors";
import style from "./CircleDetails.css";

const CircleDetails = ({ data, onBlur }) => {
  return (
    <div className="details">
      <div className="inputs">
        <NumericInput
          name={data.name}
          attribute="r"
          value={data.r}
          horizontal={false}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="cx"
          value={data.cx}
          horizontal={true}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="cy"
          value={data.cy}
          horizontal={false}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="strokeWidth"
          value={data.strokeWidth}
          horizontal={false}
          onBlur={onBlur}
        />
        <ColorPallete
          name={data.name}
          attribute="fill"
          value={data.fill}
          pallete={Object.values(colors)}
          palletePicked={onBlur}
        />
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

CircleDetails.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  onBlur: PropTypes.func.isRequired
};

export default CircleDetails;
