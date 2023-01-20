/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2023-01-09 17:34:35
 * @modify date 2023-01-20 21:52:51
 * @desc [几何体类]
 */

import { initShaders } from "./shader.js";
import {
  setAttribLocation,
  setAttribColor,
  setTranslation,
} from "./position.js";
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

  /**
   * 设置几何体平移
   * @param {*} translation 数组 [0] - x平移距离；[1] - y平移距离
   */
  setTranslation(translation) {
    setTranslation(this.gl, this.program, translation);
  }
}

export { Geometry };
