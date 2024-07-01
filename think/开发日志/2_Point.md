> 有了舞台之后（webGL 上下文），我们添加一些演员，先添加一个最简单的点。

所以封装一个 Point（演员）

```js
import { initShaders } from "../core/shader.js";
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
}

export { Point };
```

不是谁都可以随随便便在 webGL 上表演的，演员是需要基本功的，要在舞台上怎么表演是有一个规定的流程的，以下就是一些流程

1. 要知道站在舞台的什么位置，即顶点着色器数据源提供位置信息（台本 1）
2. 要知道穿什么衣服，即片元着色器数据源提供颜色信息（台本 2）
3. 施展基本功（阅读台本，理解台本剧情）

- const shader = gl.createShader(type); // 创建着色器对象
- gl.shaderSource(shader, source); // 提供数据源（把 GLSL 程序代码设置到着色器对象中）
- gl.compileShader(shader); // 编译 -> 生成着色器

- const program = gl.createProgram(); // 创建 WebGLProgram 程序
- gl.attachShader(program, shader); // 添加着色器到 WebGLProgram 程序上
- gl.linkProgram(program); // 与 WebGLProgram 对象建立链接，从而完成为程序的片元和顶点着色器准备 GPU 代码的过程

4. 运用（将台本记在心里）

- gl.useProgram(program); // 将定义好的 WebGLProgram 对象添加到当前的渲染状态中

5. 开始表演（前面的演员准备好了，你是导演，告诉演员从哪演到哪）

- gl.drawArrays(mode, first, count);

```js
/**
 * 初始化着色器程序
 * @param {*} gl 渲染上下文
 * @param {*} vertexShader 顶点着色器数据源
 * @param {*} fragmentShader 片元着色器数据源
 * @returns 返回WebGLProgram程序
 */
function initShaders(gl, vertexShader, fragmentShader) {
  // 创建指定类型的着色器
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShader);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
  if (!vertexShader || !fragmentShader) return null;

  const program = createProgram(gl, vertexShader, fragmentShader);
  return program;
}

/**
 * 创建着色器方法
 * 输入参数：渲染上下文
 * @param {*} gl 渲染上下文
 * @param {*} type 着色器类型
 * @param {*} source 数据源
 * @returns 返回着色器对象
 */
function createShader(gl, type, source) {
  const shader = gl.createShader(type); // 创建着色器对象
  gl.shaderSource(shader, source); // 提供数据源
  gl.compileShader(shader); // 编译 -> 生成着色器

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS); // 返回着色器的信息，检查编译结果
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader)); // 返回 WebGLShader 对象的信息日志
  gl.deleteShader(shader); // 删除 WebGLShader
}

/**
 * 创建着色器程序
 * @param {*} gl 渲染上下文
 * @param {*} vertexShader 顶点着色器数据源
 * @param {*} fragmentShader 片元着色器数据源
 * @returns 返回WebGLProgram程序
 */
function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram(); // 创建WebGLProgram程序
  gl.attachShader(program, vertexShader); // 添加顶点着色器到WebGLProgram程序上
  gl.attachShader(program, fragmentShader); // 添加片元着色器到WebGLProgram程序上
  gl.linkProgram(program); // 与 WebGLProgram 对象建立链接，从而完成为程序的片元和顶点着色器准备GPU代码的过程

  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

export { initShaders };
```

编写着色器（台本）

```js
// 顶点着色器
export const vertex = `
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0); // 设置坐标
    gl_PointSize = 10.0; // 设置尺寸
  }
`;

// 片元着色器
export const fragment = `
  void main() {
    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0); // 设置颜色
  }
`;
```
