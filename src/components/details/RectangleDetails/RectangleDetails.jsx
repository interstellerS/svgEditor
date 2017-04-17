import React, { PropTypes } from "react";
import { SvgShape } from "units";
import { NumericInput, ColorPallete } from "components/inputs";
import * as colors from "data/colors";
import style from "./RectangleDetails.css";

const RectangleDetails = ({ data, onBlur }) => {
  return (
    <div className="details">
      <div className="inputs">
        <NumericInput
          name={data.name}
          attribute="x"
          value={data.x}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="y"
          value={data.y}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="width"
          value={data.width}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="height"
          value={data.height}
          onBlur={onBlur}
        />
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

RectangleDetails.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  onBlur: PropTypes.func.isRequired
};

export default RectangleDetails;
