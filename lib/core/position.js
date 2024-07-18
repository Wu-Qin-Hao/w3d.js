/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2023-01-06 17:42:50
 * @modify date 2024-07-04 11:20:31
 * @desc [属性设置相关函数]
 */

/**
 * 设置顶点属性
 * @param {*} gl 渲染上下文
 * @param {*} program WebGLProgram程序
 * @param {*} positions 顶点数据
 */
function setAttribLocation(gl, program, positions) {
  var positionAttributeLocation = gl.getAttribLocation(program, "a_position"); // 从着色器程序中查找‘a_position’属性的所在位置
  var positionBuffer = gl.createBuffer(); // 因为属性值从缓存中获取数据，所以创建一个缓冲区
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // 将缓存区绑定到ARRAY_BUFFER（可以将其看作ARRAY_BUFFER = positionBuffer）
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW); // 将数据传递到positionBuffer上
  gl.useProgram(program); // 告诉它用我们之前写好的着色程序（一个着色器对）
  gl.enableVertexAttribArray(positionAttributeLocation); // 启用顶点属性

  // 告诉属性怎么从positionBuffer中读取数据 (ARRAY_BUFFER)
  var size = 3; // 每次迭代使用 3 个单位的数据
  var type = gl.FLOAT; // 每个单位的数据类型是32位浮点型
  var normalize = false; // 不需要归一化数据
  var stride = 0; //  0 = 移动单位数量 * 每个单位占用内存（sizeof(type)），每次迭代运行运动多少内存到下一个数据开始点
  var offset = 0; // 从缓冲起始位置开始读取
  gl.vertexAttribPointer(
    positionAttributeLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );
}

/**
 * 设置颜色属性
 * @param {*} gl 渲染上下文
 * @param {*} program WebGLProgram程序
 * @param {*} colorRGB 颜色对象，包含属性rgb
 */
function setAttribColor(gl, program, colorsArray) {
  var colorAttributeLocation = gl.getAttribLocation(program, "a_color"); // 从着色器程序中查找‘u_color’属性的所在位置
  var colorBuffer = gl.createBuffer(); // 因为属性值从缓存中获取数据，所以创建一个缓冲区
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(colorsArray), gl.STATIC_DRAW);
  gl.useProgram(program);
  gl.enableVertexAttribArray(colorAttributeLocation);

  var size = 3;
  var type = gl.UNSIGNED_BYTE;
  var normalize = true;
  var stride = 0;
  var offset = 0;
  gl.vertexAttribPointer(
    colorAttributeLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );
}

/**
 * 设置位置平移
 * @param {*} gl 渲染上下文
 * @param {*} program WebGLProgram程序
 * @param {*} translation 数组 [0] - x平移距离；[1] - y平移距离
 */
function setTranslation(gl, program, translation) {
  var translationLocation = gl.getUniformLocation(program, "u_translation"); // 从着色器程序中查找‘u_translation’属性的所在位置
  gl.uniform2fv(translationLocation, translation); // 设置平移
}

/**
 * 设置位置旋转
 * @param {*} gl 渲染上下文
 * @param {*} program WebGLProgram程序
 * @param {*} angle 旋转角度
 */
function setRotation(gl, program, angle) {
  var angleInRadians = ((360 - angle) * Math.PI) / 180;
  var rotation = [];
  rotation[0] = Math.sin(angleInRadians);
  rotation[1] = Math.cos(angleInRadians);

  var rotationLocation = gl.getUniformLocation(program, "u_rotation"); // 从着色器程序中查找‘u_rotation’属性的所在位置
  gl.uniform2fv(rotationLocation, rotation); // 设置旋转
}

/**
 * 设置位置缩放
 * @param {*} gl 渲染上下文
 * @param {*} program WebGLProgram程序
 * @param {*} scale 数组 [0] - x缩放大小；[1] - y缩放大小
 */
function setScale(gl, program, scale) {
  var scaleLocation = gl.getUniformLocation(program, "u_scale"); // 从着色器程序中查找‘u_scale’属性的所在位置
  gl.uniform2fv(scaleLocation, scale); // 设置缩放
}

/**
 * 通过矩阵设置位置
 * @param {*} gl 渲染上下文
 * @param {*} program WebGLProgram程序
 * @param {*} matrix 矩阵信息
 */
function setMatrix(gl, program, matrix) {
  var matrixLocation = gl.getUniformLocation(program, "u_matrix"); // 从着色器程序中查找‘u_matrix’属性的所在位置
  // gl.uniformMatrix3fv(matrixLocation, false, matrix); // 设置矩阵
  gl.uniformMatrix4fv(matrixLocation, false, matrix); // 设置矩阵
}

export {
  setAttribLocation,
  setAttribColor,
  setTranslation,
  setRotation,
  setScale,
  setMatrix,
};
