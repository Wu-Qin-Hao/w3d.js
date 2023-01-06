/**
 * @author [Wu-Qin-Hao]
 * @email [1539849378@qq.com]
 * @create date 2023-01-06 17:42:50
 * @modify date 2023-01-06 17:50:18
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
  var size = 2; // // 每次迭代运行提取两个单位数据
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

export { setAttribLocation };
