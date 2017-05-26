import React, { PropTypes } from "react";
import { SvgShape } from "units";
import { NumericInput, ColorPallete } from "components/inputs";
import { AlignDetails } from "components/details";
import * as colors from "data/colors";
import style from "./RectangleDetails.css";

const RectangleDetails = ({ data, onBlur, onAlignPicked }) => {
  return (
    <div className="details">
      <div className="inputs">
        <NumericInput
          name={data.name}
          attribute="x"
          value={data.x}
          horizontal={true}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="y"
          value={data.y}
          horizontal={false}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="width"
          value={data.width}
          horizontal={true}
          onBlur={onBlur}
        />
        <NumericInput
          name={data.name}
          attribute="height"
          value={data.height}
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
      <AlignDetails alignPicked={onAlignPicked} />
    </div>
  );
};

RectangleDetails.propTypes = {
  data: PropTypes.instanceOf(SvgShape),
  onBlur: PropTypes.func.isRequired,
  onAlignPicked: PropTypes.func.isRequired
};

export default RectangleDetails;
