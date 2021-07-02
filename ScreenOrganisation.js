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
    //wollen wir auch unabhängig von den Bildern versuchen, diese Zahlen zu benutzen, oder die states ausschreiben?
    this.pictruesPregame = [tryIt];
    if (this.state === "pregame") {
      image(tryIt, 0, 0, 100, 100);
    }
    if (this.state === "ingame") {
      image(this.background[this.backgroundNumber], 0, 0, 100, 100);
    }
    /*Alternative: (backgroundstate und pregamestate  und weitere werte für dei Arraysin constructor)
if (this.backgroundstate=== abendessen){
  image(abendessen,0,0,100,100);
//Beispielwerte
  bubbleMin=0;
  bubbleMax=2;
button=2;

}
      if (this.backgroundstate=== baeckerei){
  image(baeckerei,0,0,100,100);
}
      if (this.backgroundstate=== bekannte){
  image(bekannte,0,0,100,100);
}
     if (this.backgroundstate===  bekannteTuer){
  image(bekannteTuer,0,0,100,100);
}
      if (this.backgroundstate=== blumenladen){
  image(blumenladen,0,0,100,100);
}
      if (this.backgroundstate=== entensee){
  image(entensee,0,0,100,100);
}
      if (this.backgroundstate=== haeuser){
  image(haeuser,0,0,100,100);
}
      if (this.backgroundstate=== handy){
  image(handy,0,0,100,100);
}
      if (this.backgroundstate=== hausTante){
  image(hausTante,0,0,100,100);
}
      if (this.backgroundstate=== kueche){
  image(kueche,0,0,100,100);
}
      if (this.backgroundstate=== musikladen){
  image(musikladen,0,0,100,100);
}
      if (this.backgroundstate=== oberfeld){
  image(oberfeld,0,0,100,100);
}
     if (this.backgroundstate=== park){
  image(park,0,0,100,100);
}
      if (this.backgroundstate=== picknick){
  image(picknick,0,0,100,100);
}
      if (this.backgroundstate=== schule){
  image(schule,0,0,100,100);
}
     if (this.backgroundstate===  tanteDraussen){
  image(tanteDraussen,0,0,100,100);
}
     if (this.backgroundstate===  tanteDraussenBp){
  image(tanteDraussenBp,0,0,100,100);
}
     if (this.backgroundstate===  tanteEssen){
  image(tanteEssen,0,0,100,100);
}
      if (this.backgroundstate=== teller){
  image(teller,0,0,100,100);
}
     if (this.backgroundstate===  wohnzimmer){
  image(wohnzimmer,0,0,100,100);
}
*/
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
