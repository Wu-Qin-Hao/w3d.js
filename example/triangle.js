// import * as w3d from "../dist/w3d.js";
import * as w3d from "../lib/w3d.js";

import * as points from "../lib/shaders/points.glsl.js";

function main(positions) {
  var canvas = document.querySelector("#app");
  var gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  var vertexShader = w3d.createShader(gl, gl.VERTEX_SHADER, points.vertex);
  var fragmentShader = w3d.createShader(
    gl,
    gl.FRAGMENT_SHADER,
    points.fragment
  );

  let program = w3d.createProgram(gl, vertexShader, fragmentShader);

  let positionAttributeLocation = gl.getAttribLocation(program, "a_position");

  let positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  webglUtils.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);
  gl.enableVertexAttribArray(positionAttributeLocation);

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  var size = 2;
  var type = gl.FLOAT;
  var normalize = false;
  var stride = 0;
  var offset = 0;
  gl.vertexAttribPointer(
    positionAttributeLocation,
    size,
    type,
    normalize,
    stride,
    offset
  );

  var primitiveType = gl.TRIANGLES;
  var offset = 0;
  var count = 3;
  gl.drawArrays(primitiveType, offset, count);
}

const positions = [0, 0, 0, 1, 1, 0];
main(positions);
