> const gl = canvas.getContext("webgl") // 获取 webgl 绘图上下文

// ---------------------------------------------绘制相关--------------------------------------

1. gl.clearColor

```js
/**
 * 用于设置清空颜色缓冲时的颜色值
 * @param {number} red 指定清除缓冲时的红色值。默认值：0
 * @param {number} green 指定清除缓冲时的绿色值。默认值：0
 * @param {number} blue 指定清除缓冲时的蓝色值。默认值：0
 * @param {number} alpha 指定清除缓冲时的不透明度。默认值：0
 */
void gl.clearColor(red, green, blue, alpha);
```

2. gl.clear

```js
/**
 * 使用预设值来清空缓冲
 * @param {GLbitfield} mask 一个用于指定需要清除的缓冲区的类型
 * GLbitfield 可能的值有
 * gl.COLOR_BUFFER_BIT //颜色缓冲区
 * gl.DEPTH_BUFFER_BIT //深度缓冲区
 * gl.STENCIL_BUFFER_BIT //模板缓冲区
 */
void gl.clear(mask);
```

3. gl.drawArrays

```js
/**
 * 从向量数组中绘制图元
 * @param {GLenum} mode 指定绘制图元的方式，可能的值如下
 * - gl.POINTS: 绘制一系列点
 * - gl.LINE_STRIP: 绘制一个线条。即，绘制一系列线段，上一点连接下一点
 * - gl.LINE_LOOP: 绘制一个线圈。即，绘制一系列线段，上一点连接下一点，并且最后一点与第一个点相连
 * - gl.LINES: 绘制一系列单独线段。每两个点作为端点，线段之间不连接
 * - gl.TRIANGLE_STRIP：绘制一个三角带
 * - gl.TRIANGLE_FAN：绘制一个三角扇
 * - gl.TRIANGLES: 绘制一系列三角形。每三个点作为顶点
 * @param {number} first 指定从哪个点开始绘制
 * @param {number} count 指定绘制需要使用到多少个点
 */
void gl.drawArrays(mode, first, count);
```

// ---------------------------------------------绘制相关--------------------------------------

// --------------------------------------------着色器相关------------------------------------

1. gl.createShader

```js
/**
 * 创建一个 WebGLShader 着色器对象
 * @param {*} type 参数为 gl.VERTEX_SHADER 或 gl.FRAGMENT_SHADER 两者中的一个
 */
WebGLShader gl.createShader(type);
```

2. gl.shaderSource

```js
/**
 * 设置 WebGLShader 着色器（顶点着色器及片元着色器）的 GLSL 程序代码
 * @param {*} shader 用于设置程序代码的 WebGLShader（着色器对象）
 * @param {*} source 包含 GLSL 程序代码的字符串
 */
void gl.shaderSource(shader, source);
```

3. gl.compileShader

```js
/**
 * 编译一个 GLSL 着色器，使其成为为二进制数据，然后就可以被WebGLProgram对象所使用
 * @param {*} shader 一个片元或顶点着色器对象（WebGLShader）
 */
void gl.compileShader(shader);
```

4. gl.createProgram

```js
/**
 * 创建和初始化一个 WebGLProgram 对象
 */
WebGLProgram gl.createProgram();
```

5. gl.attachShader

```js
/**
 * 添加一个片段或者顶点着色器到 WebGLProgram 对象
 * @param {*} program 一个 WebGLProgram 对象
 * @param {*} shader 一个类型为片段或者顶点的 WebGLShader
 */
void gl.attachShader(program, shader);
```

6. gl.linkProgram

```js
/**
 * 与 WebGLProgram 对象建立链接，从而完成为程序的片元和顶点着色器准备GPU代码的过程
 * @param {*} program 用于链接的 WebGLProgram 对象
 */
void gl.linkProgram(program);
```

7. gl.useProgram

```js
/**
 * 将定义好的 WebGLProgram 对象添加到当前的渲染状态中
 * @param {*} program 用于链接的 WebGLProgram 对象
 */
void gl.useProgram(program);
```

// --------------------------------------------着色器相关------------------------------------
