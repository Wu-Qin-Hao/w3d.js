// import * as w3d from "../dist/w3d.js";
import * as w3d from "../lib/w3d.js";

function main() {
  const canvas = document.getElementById("app");
  let renderArea = new w3d.RenderArea({ canvas: canvas });
  renderArea.clear();

  let point = new w3d.Point(renderArea.gl);
  const p = new Float32Array([
    0.0, 0.0, 0.0, 0.4, 0.0, 0.0, 0.8, 0.0, 0.0, 0.8, 0.5, 0.0, 0.4, 0.5, 0.0,
    0.0, 0.5, 0.0,
  ]);
  point.setAttrib("position", p);
  const c = new Float32Array([0.0, 0.0, 1.0, 1.0]);
  point.setAttrib("color", c);
  point.render();
}

main();
