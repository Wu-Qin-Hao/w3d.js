// 顶点着色器
export const vertex = `
  attribute vec4 a_Position; // 声明attribute变量

  void main() {
    gl_Position = a_Position; // 设置坐标
    gl_PointSize = 10.0; // 设置尺寸
  }
`;

// 片元着色器
export const fragment = `
  precision mediump float;
 
  // 从顶点着色器中传入
  uniform vec4 u_Color;

  void main() {
    gl_FragColor = u_Color; // 设置颜色
  }
`;
