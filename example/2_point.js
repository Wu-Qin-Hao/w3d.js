// import * as w3d from "../dist/w3d.js";
import * as w3d from "../lib/w3d.js";

function main() {
  const canvas = document.getElementById("app");
  let renderArea = new w3d.RenderArea({ canvas: canvas });
  renderArea.clear();

  let point = new w3d.Point(renderArea.gl);
  point.render();
}

main();
