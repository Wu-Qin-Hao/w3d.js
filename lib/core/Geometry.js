/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2023-01-09 17:34:35
 * @modify date 2023-01-09 18:47:23
 * @desc [几何体类]
 */

import { initShaders } from "./shader.js";
import { setAttribLocation, setAttribColor } from "./position.js";
import * as points from "../shaders/points.glsl.js";

class Geometry {
  constructor(gl) {
    this.gl = gl;
    this.program = initShaders(this.gl, points.vertex, points.fragment);
  }

  /**
   * 设置几何体顶点属性
   * @param {*} positions 顶点数据集合
   */
  setAttribLocation(positions) {
    setAttribLocation(this.gl, this.program, positions);
  }

  /**
   * 设置几何体颜色
   * @param {*} colorRGB rgb颜色值
   */
  setAttribColor(colorRGB) {
    setAttribColor(this.gl, this.program, colorRGB);
  }
}

export { Geometry };
