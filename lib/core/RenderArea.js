/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2023-01-06 17:43:01
 * @modify date 2023-01-31 15:23:40
 * @desc [渲染区域控制器]
 */

class RenderArea {
  constructor(parameters) {
    this.canvas = parameters.canvas;

    this.gl = this.canvas.getContext("webgl");

    this.pixelRatio = 1;

    this.resizeCanvasToDisplaySize();
    this.setSize(this.canvas.width, this.canvas.height);
  }

  resizeCanvasToDisplaySize(multiplier) {
    multiplier = multiplier || 1;

    const width = (this.canvas.clientWidth * multiplier) | 0;
    const height = (this.canvas.clientHeight * multiplier) | 0;

    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }

  setSize(width, height, updateStyle) {
    this.canvas.width = Math.floor(width * this.pixelRatio);
    this.canvas.height = Math.floor(height * this.pixelRatio);

    if (updateStyle !== false) {
      this.canvas.style.width = width + "px";
      this.canvas.style.height = height + "px";
    }

    this.gl.viewport(0, 0, width, height);
  }

  clear() {
    this.gl.clearColor(0, 0, 0, 0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  }

  render() {
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.enable(this.gl.DEPTH_TEST);

    var primitiveType = this.gl.TRIANGLES;
    var offset = 0;
    var count = 16 * 6; // 3表示处理3个顶点，所有会有3个顶点被转换
    this.gl.drawArrays(primitiveType, offset, count);
  }

  setAnimationLoop(callback) {}
}

export { RenderArea };
