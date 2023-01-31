/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2023-01-09 17:34:35
 * @modify date 2023-01-31 17:18:40
 * @desc [几何体类]
 */

import { initShaders } from "./shader.js";
import {
  setAttribLocation,
  setAttribColor,
  setTranslation,
  setRotation,
  setScale,
  setMatrix,
} from "./position.js";
import * as points from "../shaders/points.glsl.js";
import { Matrix3 } from "../math/Matrix3.js";
import { Matrix4 } from "../math/Matrix4.js";

class Geometry {
  constructor(gl) {
    this.gl = gl;
    this.program = initShaders(this.gl, points.vertex, points.fragment);

    this.m4 = new Matrix4();

    var left = 0;
    var right = this.gl.canvas.clientWidth;
    var bottom = this.gl.canvas.clientHeight;
    var top = 0;
    var near = 400;
    var far = -400;
    this.matrix = this.m4.orthographic(left, right, bottom, top, near, far);
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
    // setTranslation(this.gl, this.program, translation);

    this.matrix = this.m4.translate(
      this.matrix,
      translation[0],
      translation[1],
      translation[2]
    );
    this.setMatrix(this.matrix);
  }

  /**
   * 设置几何体旋转
   * @param {*} angle 旋转角度
   */
  setRotation(angleX, angleY, angleZ) {
    // setRotation(this.gl, this.program, angle);

    this.matrix = this.m4.xRotate(this.matrix, angleX);
    this.matrix = this.m4.yRotate(this.matrix, angleY);
    this.matrix = this.m4.zRotate(this.matrix, angleZ);
    this.setMatrix(this.matrix);
  }

  /**
   * 设置几何体缩放
   * @param {*} scale 数组 [0] - x缩放大小；[1] - y缩放大小
   */
  setScale(scale) {
    // setScale(this.gl, this.program, scale);

    this.matrix = this.m4.scale(this.matrix, scale[0], scale[1], scale[2]);
    this.setMatrix(this.matrix);
  }

  /**
   * 通过矩阵设置位置
   * @param {*} matrix 矩阵信息
   */
  setMatrix(matrix) {
    setMatrix(this.gl, this.program, matrix);
  }
}

export { Geometry };
