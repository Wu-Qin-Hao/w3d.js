/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2024-06-27 10:33:14
 * @modify date 2024-06-28 10:20:08
 * @desc [点几何体]
 */

import { initShaders } from "../core/shader.js";
import {
  setAttribLocation,
  setAttribColor,
  setMatrix,
} from "../core/position.js";
import * as point from "./point.glsl.js";

class Point {
  constructor(gl) {
    this.gl = gl;
    // 初始化着色器程序，让WebGL知道如何绘制我们的数据
    this.program = initShaders(this.gl, point.vertex, point.fragment);
  }

  render() {
    // 告诉gl用我们之前写好的着色程序（一个着色器对）
    this.gl.useProgram(this.program);

    const primitiveType = this.gl.POINTS;
    const offset = 0;
    const count = 1;
    this.gl.drawArrays(primitiveType, offset, count);
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
   * 通过矩阵设置位置
   * @param {*} matrix 矩阵信息
   */
  setMatrix(matrix) {
    setMatrix(this.gl, this.program, matrix);
  }
}

export { Point };
