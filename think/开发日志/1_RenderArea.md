> webGL 最基础的是要给他搭建一个舞台（webGL 上下文）

所以封装一个 RenderArea

```js
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
  }

  clear() {
    // 设置背景色（指定清空canvas的颜色）
    this.gl.clearColor(1.0, 0.0, 0.0, 1.0);
    // 用上面指定的颜色清除缓冲区
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }
}

export { RenderArea };
```

调用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
      }
      canvas {
        border: solid 1px;
      }
    </style>
    <title>W3d</title>
  </head>
  <body>
    <canvas id="app" width="1200" height="400"></canvas>
    <script type="module">
      import * as w3d from "../dist/w3d.js";

      function main() {
        const canvas = document.getElementById("app");
        let renderArea = new w3d.RenderArea({ canvas: canvas });
        renderArea.clear();
      }

      main();
    </script>
  </body>
</html>
```
