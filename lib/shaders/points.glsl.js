export const vertex = `
  attribute vec2 a_position;

  uniform vec2 u_resolution;
  uniform vec2 u_translation;
  uniform vec2 u_rotation;
 
  void main() {
    // 旋转位置
    vec2 rotatedPosition = vec2(a_position.x * u_rotation.y + a_position.y * u_rotation.x, a_position.y * u_rotation.y - a_position.x * u_rotation.x);

    // 加上平移量
    vec2 position = rotatedPosition + u_translation;

    // 从像素坐标转换到 0->1
    vec2 zeroToOne = position / u_resolution;

    // 把 0->1 转换 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;

    // 把 0->2 转换到 -1->+1 (裁剪空间)
    vec2 clipSpace = zeroToTwo - 1.0;

    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
  }
`;

export const fragment = `
  precision mediump float;
 
  uniform vec4 u_color;

  void main() {
    gl_FragColor = u_color;
  }
`;
