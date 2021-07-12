function preload() {
  abendessen = loadImage("./backgroundScreens/abendessen.png");
  baeckerei = loadImage("./backgroundScreens/baeckerei.png");
  bekannte = loadImage("./backgroundScreens/bekannte.png");
  bekannteTuer = loadImage("./backgroundScreens/bekannteTuer.png");
  blumenladen = loadImage("./backgroundScreens/blumenladen.png");
  entensee = loadImage("./backgroundScreens/entensee.png");
  haeuser = loadImage("./backgroundScreens/haeuser.png");
  handy = loadImage("./backgroundScreens/handy.png");
  hausTante = loadImage("./backgroundScreens/hausTante.png");
  kueche = loadImage("./backgroundScreens/kueche.png");
  musikladen = loadImage("./backgroundScreens/musikLaden.png");
  oberfeld = loadImage("./backgroundScreens/oberfeld.png");
  park = loadImage("./backgroundScreens/park.png");
  picknick = loadImage("./backgroundScreens/picknick.png");
  schule = loadImage("./backgroundScreens/schule.png");
  tanteDraussen = loadImage("./backgroundScreens/tanteDraussen.png");
  tanteDraussenBp = loadImage("./backgroundScreens/tanteDraussenBp.png");
  tanteEssen = loadImage("./backgroundScreens/tanteEssen.png");
  teller = loadImage("./backgroundScreens/teller.png");
  wohnzimmer = loadImage("./backgroundScreens/wohnzimmer.png");
}
window.preload = preload;

function setup() {
  createCanvas(1162, 700);
  frameRate(30);
}

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
