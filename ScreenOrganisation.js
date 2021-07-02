export default class ScreenOrganisation {
  constructor(pictuesPregameNumber, state) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = state;
    this.pictruesPregame = [];
    this.background = [];
    this.backgroundNumber = "";
    this.pictuesPregameNumber = pictuesPregameNumber;
  }
  display(
    abendessen,
    baeckerei,
    bekannte,
    bekannteTuer,
    blumenladen,
    entensee,
    haeuser,
    handy,
    hausTante,
    kueche,
    musikladen,
    oberfeld,
    park,
    picknick,
    schule,
    tanteDraussen,
    tanteDraussenBp,
    tanteEssen,
    teller,
    wohnzimmer,
    tryIt
  ) {
    push();

    this.background = [
      abendessen,
      baeckerei,
      bekannte,
      bekannteTuer,
      blumenladen,
      entensee,
      haeuser,
      handy,
      hausTante,
      kueche,
      musikladen,
      oberfeld,
      park,
      picknick,
      schule,
      tanteDraussen,
      tanteDraussenBp,
      tanteEssen,
      teller,
      wohnzimmer,
    ];
    this.pictruesPregame = [tryIt];
    if (this.state === "pregame") {
      image(tryIt, 0, 0, 100, 100);
    }
    if (this.state === "ingame") {
      image(this.background[this.backgroundNumber], 0, 0, 100, 100);
    }

    pop();
  }
  hitTest() {
    if (
      mouseX <= this.x &&
      mouse >= this.x + this.width &&
      mouseY <= this.y &&
      mouseY >= this.y + this.height
    ) {
      return true;
    }
  }
}
//mit preload() Bilder reinladen
// buttonkoordinate und größe definieren
//states für die Verschiedenen Szenen erstellen? Extradatei mit Funktionen
//stated, die schon existieren: pregame und ingame
