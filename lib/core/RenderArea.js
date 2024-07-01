/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2023-01-06 17:43:01
 * @modify date 2024-06-27 10:47:11
 * @desc [webGL渲染舞台]
 */

class RenderArea {
  constructor(parameters) {
    this.canvas = parameters.canvas;

    // 获取webgl绘图上下文
    this.gl = this.canvas.getContext("webgl");

    // 确认 WebGL 支持性
    if (!this.gl) {
      alert("无法初始化 WebGL，你的浏览器、操作系统或硬件等可能不支持 WebGL。");
      return;
    }

    // this.pixelRatio = 1;

    // this.resizeCanvasToDisplaySize();
    // this.setSize(this.canvas.width, this.canvas.height);
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
    // 设置背景色（指定清空canvas的颜色）
    this.gl.clearColor(1.0, 0.0, 0.0, 1.0);
    // 用上面指定的颜色清除缓冲区
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
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
