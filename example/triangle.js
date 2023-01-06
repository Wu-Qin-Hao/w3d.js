// import * as w3d from "../dist/w3d.js";
import * as w3d from "../lib/w3d.js";

import * as points from "../lib/shaders/points.glsl.js";

function main() {
  const canvas = document.getElementById("app");
  let renderArea = new w3d.RenderArea({ canvas: canvas });

  let program = w3d.initShaders(renderArea.gl, points.vertex, points.fragment);
  const positions = [0, 0, 0, 1, 1, 0];
  w3d.setAttribLocation(renderArea.gl, program, positions);

  renderArea.render();
}

main();
