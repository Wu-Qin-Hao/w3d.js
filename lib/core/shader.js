/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2023-01-06 17:43:11
 * @modify date 2023-01-06 17:50:36
 * @desc [创建着色器相关的函数]
 */

/**
 * 创建着色器方法
 * 输入参数：渲染上下文
 * @param {*} gl 渲染上下文
 * @param {*} type 着色器类型
 * @param {*} source 数据源
 * @returns 返回着色器对象
 */
function createShader(gl, type, source) {
  var shader = gl.createShader(type); // 创建着色器对象
  gl.shaderSource(shader, source); // 提供数据源
  gl.compileShader(shader); // 编译 -> 生成着色器

  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

/**
 * 创建着色器程序
 * @param {*} gl 渲染上下文
 * @param {*} vertexShader 顶点着色器数据源
 * @param {*} fragmentShader 片元着色器数据源
 * @returns 返回WebGLProgram程序
 */
function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram(); // 创建WebGLProgram程序
  gl.attachShader(program, vertexShader); // 添加顶点着色器到WebGLProgram程序上
  gl.attachShader(program, fragmentShader); // 添加片元着色器到WebGLProgram程序上
  gl.linkProgram(program); // 链接给入的 WebGLProgram 对象，从而完成为程序的片元和顶点着色器准备GPU代码的过程

  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

/**
 * 初始化着色器程序
 * @param {*} gl 渲染上下文
 * @param {*} vertexShader 顶点着色器数据源
 * @param {*} fragmentShader 片元着色器数据源
 * @returns 返回WebGLProgram程序
 */
function initShaders(gl, vertexShader, fragmentShader) {
  // 创建指定类型的着色器
  var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShader);
  var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
  if (!vertexShader || !fragmentShader) return null;

  let program = createProgram(gl, vertexShader, fragmentShader);
  return program;
}

export { createShader, createProgram, initShaders };
