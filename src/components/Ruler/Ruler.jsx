import React, { Component, PropTypes } from "react";
import { Svg } from "units";
import { UnitRenderer } from "components/renderers";
import $ from "jquery";

import "./Ruler.css";

function updateRulers(scanvas, zoom) {
  if (!zoom) {
    //zoom = svgCanvas.getZoom();
    zoom = 1;
  }
  if (!scanvas) {
    scanvas = $(".svgContainer");
  }

  var d, i;
  var limit = 30000;
  var contentElem = $("#svgcanvas");

  var unit = 1; // 1 = 1px

  // draw x ruler then y ruler
  for (d = 0; d < 2; d++) {
    var isX = d === 0;
    var dim = isX ? "x" : "y";
    var lentype = isX ? "width" : "height";
    var contentDim = Number(contentElem.getAttribute(dim));

    var $hcanv_orig = $("#ruler_" + dim + " canvas:first");

    // Bit of a hack to fully clear the canvas in Safari & IE9
    var $hcanv = $hcanv_orig.clone();
    $hcanv_orig.replaceWith($hcanv);

    var hcanv = $hcanv[0];

    // Set the canvas size to the width of the container
    var ruler_len = scanvas[lentype]();
    var total_len = ruler_len;
    hcanv.parentNode.style[lentype] = total_len + "px";
    var ctx_num = 0;
    var ctx = hcanv.getContext("2d");
    var ctx_arr, num, ctx_arr_num;

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(0, 0, hcanv.width, hcanv.height);

    // Remove any existing canvasses
    $hcanv.siblings().remove();

    // Create multiple canvases when necessary (due to browser limits)
    if (ruler_len >= limit) {
      ctx_arr_num = parseInt(ruler_len / limit, 10) + 1;
      ctx_arr = [];
      ctx_arr[0] = ctx;
      var copy;
      for (i = 1; i < ctx_arr_num; i++) {
        hcanv[lentype] = limit;
        copy = hcanv.cloneNode(true);
        hcanv.parentNode.appendChild(copy);
        ctx_arr[i] = copy.getContext("2d");
      }

      copy[lentype] = ruler_len % limit;

      // set copy width to last
      ruler_len = limit;
    }

    hcanv[lentype] = ruler_len;

    var u_multi = unit * zoom;

    // Calculate the main number interval
    var raw_m = 50 / u_multi;
    var multi = 1;
    for (i = 0; i < r_intervals.length; i++) {
      num = r_intervals[i];
      multi = num;
      if (raw_m <= num) {
        break;
      }
    }

    var big_int = multi * u_multi;

    ctx.font = "9px sans-serif";

    var ruler_d = contentDim / u_multi % multi * u_multi;
    var label_pos = ruler_d - big_int;
    // draw big intervals
    while (ruler_d < total_len) {
      label_pos += big_int;
      // var real_d = ruler_d - contentDim; // Currently unused

      var cur_d = Math.round(ruler_d) + 0.5;
      if (isX) {
        ctx.moveTo(cur_d, 15);
        ctx.lineTo(cur_d, 0);
      } else {
        ctx.moveTo(15, cur_d);
        ctx.lineTo(0, cur_d);
      }

      num = (label_pos - contentDim) / u_multi;
      var label;
      if (multi >= 1) {
        label = Math.round(num);
      } else {
        var decs = String(multi).split(".")[1].length;
        label = num.toFixed(decs);
      }

      // Change 1000s to Ks
      if (label !== 0 && label !== 1000 && label % 1000 === 0) {
        label = label / 1000 + "K";
      }

      if (isX) {
        ctx.fillText(label, ruler_d + 2, 8);
      } else {
        // draw label vertically
        var str = String(label).split("");
        for (i = 0; i < str.length; i++) {
          ctx.fillText(str[i], 1, ruler_d + 9 + i * 9);
        }
      }

      var part = big_int / 10;
      // draw the small intervals
      for (i = 1; i < 10; i++) {
        var sub_d = Math.round(ruler_d + part * i) + 0.5;
        if (ctx_arr && sub_d > ruler_len) {
          ctx_num++;
          ctx.stroke();
          if (ctx_num >= ctx_arr_num) {
            i = 10;
            ruler_d = total_len;
            continue;
          }
          ctx = ctx_arr[ctx_num];
          ruler_d -= limit;
          sub_d = Math.round(ruler_d + part * i) + 0.5;
        }

        // odd lines are slighly longer
        var line_num = i % 2 ? 12 : 10;
        if (isX) {
          ctx.moveTo(sub_d, 15);
          ctx.lineTo(sub_d, line_num);
        } else {
          ctx.moveTo(15, sub_d);
          ctx.lineTo(line_num, sub_d);
        }
      }
      ruler_d += big_int;
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();
  }
}

class Ruler extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //updateRulers();
  }

  render() {
    return (
      <div>
        <div id="rulers">
          <div id="ruler_corner" />
          <div id="ruler_x">
            <div>
              <canvas />
            </div>
          </div>
          <div id="ruler_y">
            <div>
              <canvas />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ruler;
