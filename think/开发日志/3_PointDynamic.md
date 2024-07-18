> 现在点演员可以在舞台上表演了，但是呢，他只能按照台本里的位置进行演出，有些时候需要灵活改变位置，听导演的指挥，所以我们需要可以改变台本里的某些剧情

修改着色器（台本）

```js
// 顶点着色器
export const vertex = `
  attribute vec4 a_Position; // 声明attribute变量

  void main() {
    gl_Position = a_Position; // 设置坐标
    gl_PointSize = 10.0; // 设置尺寸
  }
`;
```

台本不是随便就能改的，需要一定的流程，比如要经过编剧等一些人员处理

# 使用 attribute 变量流程

- a1.在顶点着色器中，声明 attribute 变量
- a2.将 attribute 变量赋值给 gl_Position 变量
- a3.获取 attribute 变量的存储位置
- a4.向 attribute 变量传输数据

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84e13462ac484635b3eac7e502a2acda~tplv-k3u1fbpfcp-watermark.image?)

## a1.声明 attribute 变量

> attribute 变量是与顶点相关的数据。attribut 变量是一种 GLSL 变量，被用来从外部向顶点着色器内传输数据，只有顶点着色器才能使用它。

```js
// <存储限定符><类型><变量名>
attribute vec4 a_Position;

// 关键字attribute被称为存储限定符，表示接下来的变量是一个attribute变量
// attribute变量必须声明成全局变量，数据将从着色器外部传给改变量
```

## a2.将 attribute 变量赋值给 gl_Position 变量

```js
gl_Position = a_Position; // 设置坐标
```

## a3.获取 attribute 变量的存储位置

```js
const a_Position = gl.getAttribLocation(gl.program, "a_Position");
```

## a4.向 attribute 变量赋值

```js
void gl.vertexAttrib4f(index, v0, v1, v2, v3);
```

Point 中封装一个调用函数

```js
  setPosition(x, y, z) {
    var a_Position = this.gl.getAttribLocation(this.program, "a_Position");
    this.gl.vertexAttrib4f(a_Position, x, y, z, 1.0);
  }
```
