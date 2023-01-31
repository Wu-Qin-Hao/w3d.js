export const vertex = `
  // attribute vec2 a_position;
  attribute vec4 a_position;

  attribute vec4 a_color;

  // uniform vec2 u_resolution;
  // uniform vec2 u_translation;
  // uniform vec2 u_rotation;
  // uniform vec2 u_scale;
  // uniform mat3 u_matrix;
  uniform mat4 u_matrix;

  varying vec4 v_color;
 
  void main() {
    // // 缩放
    // vec2 scaledPosition = a_position * u_scale;

    // // 旋转位置
    // vec2 rotatedPosition = vec2(
    //   scaledPosition.x * u_rotation.y + scaledPosition.y * u_rotation.x,
    //   scaledPosition.y * u_rotation.y - scaledPosition.x * u_rotation.x);

    // // 加上平移量
    // vec2 position = rotatedPosition + u_translation;

    // // 将位置乘以矩阵
    // vec2 position = (u_matrix * vec3(a_position, 1)).xy;

    // // 从像素坐标转换到 0->1
    // vec2 zeroToOne = position / u_resolution;

    // // 把 0->1 转换 0->2
    // vec2 zeroToTwo = zeroToOne * 2.0;

    // // 把 0->2 转换到 -1->+1 (裁剪空间)
    // vec2 clipSpace = zeroToTwo - 1.0;

    // gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);

    // // 使位置和矩阵相乘
    // gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);

    // 将位置和矩阵相乘
    gl_Position = u_matrix * a_position;

    // 将颜色传递给片段着色器
    v_color = a_color;
  }
`;

export const fragment = `
  precision mediump float;
 
  // 从顶点着色器中传入
  varying vec4 v_color;

  void main() {
    gl_FragColor = v_color;
  }
`;
