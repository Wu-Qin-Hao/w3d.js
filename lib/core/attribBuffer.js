/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2024-07-04 10:34:41
 * @modify date 2024-07-08 10:28:37
 * @desc [属性设置相关函数]
 */

/**
 * 设置属性
 * @param {*} gl 渲染上下文
 * @param {*} program WebGLProgram程序
 * @param {string} name 属性名称
 * @param {Float32Array} data 顶点数据
 */
function setAttrib(gl, program, data, location) {
  const positionBuffer = gl.createBuffer(); // 因为属性值从缓存中获取数据，所以创建一个缓冲区
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // 将缓存区绑定到ARRAY_BUFFER（可以将其看作ARRAY_BUFFER = positionBuffer）
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); // 将数据传递到positionBuffer上
  gl.useProgram(program); // 告诉它用我们之前写好的着色程序（一个着色器对）
  gl.enableVertexAttribArray(location); // 启用顶点属性

  // 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
  var size = 3; // 每次迭代使用 3 个单位的数据
  var type = gl.FLOAT; // 每个单位的数据类型是32位浮点型
  var normalize = false; // 不需要归一化数据
  var stride = 0; //  0 = 移动单位数量 * 每个单位占用内存（sizeof(type)），每次迭代运行运动多少内存到下一个数据开始点
  var offset = 0; // 从缓冲起始位置开始读取
  gl.vertexAttribPointer(location, size, type, normalize, stride, offset);
}

/**
 * 设置顶点属性
 * @param {*} gl 渲染上下文
 * @param {*} program WebGLProgram程序
 * @param {Float32Array} positon 顶点数据
 */
function setAttribPosition(gl, program, positon) {
  const location = gl.getAttribLocation(program, "a_Position"); // 从着色器程序中查找name属性的所在位置
  // setAttrib(gl, program, positon, location);
  const positionBuffer = gl.createBuffer(); // 因为属性值从缓存中获取数据，所以创建一个缓冲区
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // 将缓存区绑定到ARRAY_BUFFER（可以将其看作ARRAY_BUFFER = positionBuffer）
  gl.bufferData(gl.ARRAY_BUFFER, positon, gl.STATIC_DRAW); // 将数据传递到positionBuffer上
  gl.useProgram(program); // 告诉它用我们之前写好的着色程序（一个着色器对）
  gl.enableVertexAttribArray(location); // 启用顶点属性

  // 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
  var size = 3; // 每次迭代使用 3 个单位的数据
  var type = gl.FLOAT; // 每个单位的数据类型是32位浮点型
  var normalize = false; // 不需要归一化数据
  var stride = 0; //  0 = 移动单位数量 * 每个单位占用内存（sizeof(type)），每次迭代运行运动多少内存到下一个数据开始点
  var offset = 0; // 从缓冲起始位置开始读取
  gl.vertexAttribPointer(location, size, type, normalize, stride, offset);
}

/**
 * 设置颜色属性
 * @param {*} gl 渲染上下文
 * @param {*} program WebGLProgram程序
 * @param {Float32Array} color 颜色数据
 */
function setAttribColor(gl, program, color) {
  const location = gl.getUniformLocation(program, "u_Color"); // 从着色器程序中查找name属性的所在位置
  // 将颜色数组的一部分传递给Uniform变量
  gl.uniform4fv(location, color);
}

export { setAttribPosition, setAttribColor };
