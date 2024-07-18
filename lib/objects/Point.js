/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2024-06-27 10:33:14
 * @modify date 2024-07-05 10:00:16
 * @desc [点几何体]
 */

import { initShaders } from "../core/shader.js";
import { setAttribPosition, setAttribColor } from "../core/attribBuffer.js";
import * as point from "./point.glsl.js";

class Point {
  constructor(gl) {
    this.gl = gl;
    // 初始化着色器程序，让WebGL知道如何绘制我们的数据
    this.program = initShaders(this.gl, point.vertex, point.fragment);

    this.pointLength = 0;
  }

  // setPosition(x, y, z) {
  //   var a_Position = this.gl.getAttribLocation(this.program, "a_Position");
  //   this.gl.vertexAttrib4f(a_Position, x, y, z, 1.0);
  // }

  render() {
    // 告诉gl用我们之前写好的着色程序（一个着色器对）
    this.gl.useProgram(this.program);

    const primitiveType = this.gl.POINTS;
    const offset = 0;
    const count = this.pointLength;
    this.gl.drawArrays(primitiveType, offset, count); // 开始绘制
  }

  /**
   * 设置几何体属性
   * @param {Float32Array} data 数据集合
   */
  setAttrib(name, data) {
    switch (name) {
      case "position":
        this.pointLength = data.length;
        setAttribPosition(this.gl, this.program, data);
        break;

      case "color":
        setAttribColor(this.gl, this.program, data);
        break;
      default:
        break;
    }
  }
}

export { Point };
