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
