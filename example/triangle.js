// import * as w3d from "../dist/w3d.js";
import * as w3d from "../lib/w3d.js";

function main() {
  const canvas = document.getElementById("app");
  let renderArea = new w3d.RenderArea({ canvas: canvas });

  let geometry = new w3d.Geometry(renderArea.gl);

  const positions = [10, 20, 180, 20, 10, 180]; // 屏幕的二维坐标，xy空间，单位px
  geometry.setAttribLocation(positions);

  const rgb = { r: 0.2, g: 0.7, b: 0.1 };
  geometry.setAttribColor(rgb);

  const translation = [100, 100];
  geometry.setTranslation(translation);

  const angle = 30;
  geometry.setRotation(angle);

  const scale = [2, 1];
  geometry.setScale(scale);

  renderArea.render();
}

main();
