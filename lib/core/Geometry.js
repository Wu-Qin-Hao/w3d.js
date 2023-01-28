/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2023-01-09 17:34:35
 * @modify date 2023-01-28 15:55:28
 * @desc [几何体类]
 */

import { initShaders } from "./shader.js";
import {
  setAttribLocation,
  setAttribColor,
  setTranslation,
  setRotation,
  setScale,
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

    const rgb = { r: 0, g: 0, b: 0 };
    this.setAttribColor(rgb);

    const translation = [0, 0];
    this.setTranslation(translation);

    const angle = 0;
    this.setRotation(angle);

    const scale = [1, 1];
    this.setScale(scale);
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

  /**
   * 设置几何体旋转
   * @param {*} angle 旋转角度
   */
  setRotation(angle) {
    setRotation(this.gl, this.program, angle);
  }

  /**
   * 设置几何体缩放
   * @param {*} scale 数组 [0] - x缩放大小；[1] - y缩放大小
   */
  setScale(scale) {
    setScale(this.gl, this.program, scale);
  }
}

export { Geometry };
