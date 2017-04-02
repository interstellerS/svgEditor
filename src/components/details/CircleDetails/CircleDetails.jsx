import React, { PropTypes } from "react";
import { SvgShape } from "units";
import { NumericInput, ColorPallete } from "components/inputs";
import * as colors from "data/colors";
import style from "./CircleDetails.css";

const CircleDetails = ({ data, onBlur }) => {
  return (
    <div>
      <h4 className="CircleDetails"> Circle Details </h4>
      <div className="inputs">
        <NumericInput
          name={data.name}
          attribute="r"
          value={data.r}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="cx"
          value={data.cx}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="cy"
          value={data.cy}
          onBlur={onBlur}
        />
      </div>
      <div className="colors">
        <span>fill</span>
        <ColorPallete
          name={data.name}
          attribute="fill"
          value={data.fill}
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
