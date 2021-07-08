import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
import AnaPersonParameter from "./AnaPersonParameter.js";
import WellBeing from "./WellBeing.js";
import Export from "./Export.js";
import ScreenOrganisation from "./ScreenOrganisation.js";
let screens = new ScreenOrganisation();
let bPbubble = new PersonalBubble("#e2efde", "right");
let otherbubble = new PersonalBubble("#ffcccc", "left");
//bP
let parameter = new AnaPersonParameter(0, -2);
let mood = new WellBeing(100, 100, parameter.trigger, parameter.wellBeing);
//für die Namensarrays
let pbNameArray = [];
let bPName = " du ";
let nameWritten = false;
//bubble
let minCounter = screens.min.speechBubble;
let counter = screens.min.speechBubble;
let maxCounter = screens.max.speechBubble;
//in bubbleArray werden alle Objekte definiert
let bubbleArray = [];
let y = 300;
//in person und messageArray müssen an gleicher Stelle im Array die Inhalte (also wer sagt was) definiert werden
let person = ["bP", "user", "user", "bP", "user", "user"];
function keyPressed() {
  pbNameArray.push(key);
  if (keyIsDown(8)) {
    pbNameArray.pop();
    pbNameArray.pop();
  }

  if (keyIsDown(32)) {
    pbNameArray.pop();
    pbNameArray.push(" ");
  }

  if (keyIsDown(13)) {
    pbNameArray.pop();
    nameWritten = true;
  }
  fill(0, 255, 0);
}

//Hilfe von Herr Toepper und https://p5js.org/examples/objects-array-of-objects.html
//die Anzahl an Nachrichten definiert, wieviele neue Sprechblasen erzeugt wird

function preload() {
  abendessen = loadImage("backgroundScreens/abendessen.png");
  baeckerei = loadImage("backgroundScreens/baeckerei.png");
  bekannte = loadImage("backgroundScreens/bekannte.png");
  bekannteTuer = loadImage("backgroundScreens/bekannteTuer.png");
  blumenladen = loadImage("backgroundScreens/blumenladen.png");
  entensee = loadImage("backgroundScreens/entensee.png");
  haeuser = loadImage("backgroundScreens/haeuser.png");
  handy = loadImage("backgroundScreens/handy.png");
  hausTante = loadImage("backgroundScreens/hausTante.png");
  kueche = loadImage("backgroundScreens/kueche.png");
  musikladen = loadImage("backgroundScreens/musikLaden.png");
  oberfeld = loadImage("backgroundScreens/oberfeld.png");
  park = loadImage("backgroundScreens/park.png");
  picknick = loadImage("backgroundScreens/picknick.png");
  schule = loadImage("backgroundScreens/schule.png");
  tanteDraussen = loadImage("backgroundScreens/tanteDraussen.png");
  tanteDraussenBp = loadImage("backgroundScreens/tanteDraussenBp.png");
  tanteEssen = loadImage("backgroundScreens/tanteEssen.png");
  teller = loadImage("backgroundScreens/teller.png");
  wohnzimmer = loadImage("backgroundScreens/wohnzimmer.png");
  tryIt = loadImage("try.png");
}
function mousePressed() {
  if (nameWritten === true) {
    if (counter < maxCounter) {
      //die einzelnen Elemente von bubbleArray sind die Objekte der Klasse Speechbubble, die vor der function draw erzeugt wurden
      //es muss für jede Person, die Auftreten kann eine If-funktion erstellt werden. Die Anzahl ist aber überschaubar.
      if (bubbleArray[counter].person === "bP") {
        bubbleArray[counter].hitTest(0);
      } else if (bubbleArray[counter].person === "user") {
        bubbleArray[counter].hitTest(0);
      }
      if (bubbleArray[counter].hitterNumber > 0) {
        counter = counter + 1;
      }
    }
    //durch diese if-Bedingung wird die letzte Sprechblase auch angezeigt
    if (counter <= maxCounter && counter - 1 >= minCounter) {
      if (bubbleArray[counter - 1].person === "bP") {
        bubbleArray[counter - 1].hitTest(0);
      } else if (bubbleArray[counter - 1].person === "user") {
        bubbleArray[counter - 1].hitTest(0);
      }
    }
  }
}

function draw() {
  background(255);
  screens.state.game = "ingame";
  screens.backgroundNumber = 3;
  if (nameWritten === true) {
    bPName = pbNameArray.join("");
    screens.display(
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
      startscreen,
      tutorial1,
      position,
      nameIt
    );
    let expo = new Export(bPName);
    for (let i = 0; i < expo.messageArray.length; i++) {
      if (i < maxCounter) {
        bubbleArray.push(
          new SpeechBubble(
            y,
            expo.messageArray[i],
            person[i],
            expo.messageArray[i + 1]
          )
        );
      }
      if (i === maxCounter - 1) {
        bubbleArray.push(
          new SpeechBubble(y, expo.messageArray[i], person[i], ". .")
        );
      }
    }

    //screens

    //speech bubble
    if (counter < maxCounter) {
      bubbleArray[counter].y =
        400 -
        bubbleArray[counter].messageHeight(bubbleArray[counter].textLeading);
      //bubbleArray[counter - 1].y = bubbleArray[counter].hitHeight;
    }

    //counter geht jede Stelle der Array durch. Eine for-Schleife würde dabei alle Objekte gleichzeitig aufrufen, weshalb es so gelöst werden musste
    if (counter < maxCounter && screens.visible.speechBubble === true) {
      //die einzelnen Elemente von bubbleArray sind die Objekte der Klasse Speechbubble, die vor der function draw erzeugt wurden
      //es muss für jede Person, die Auftreten kann eine If-funktion erstellt werden. Die Anzahl ist aber überschaubar.
      if (bubbleArray[counter].person === "bP") {
        bubbleArray[counter].all(bPbubble.direction, bPbubble.color);
      } else if (bubbleArray[counter].person === "user") {
        bubbleArray[counter].all(otherbubble.direction, otherbubble.color);
      }
      if (bubbleArray[counter].hitterNumber > 0) {
        counter = counter + 1;
      }
    }

    //durch diese if-Bedingung wird die letzte Sprechblase auch angezeigt
    //Sprechblasen gehen langsam nach oben
    if (
      counter < maxCounter &&
      counter - 1 >= minCounter &&
      screens.visible.speechBubble === true
    ) {
      if (bubbleArray[counter - 1].person === "bP") {
        bubbleArray[counter - 1].all(bPbubble.direction, bPbubble.color);
      } else if (bubbleArray[counter - 1].person === "user") {
        bubbleArray[counter - 1].all(otherbubble.direction, otherbubble.color);
      }
    }
  }
  //name
  fill(0);
  textSize(20);
  text("Hallo. Ich heiße " + pbNameArray.join(""), 100, 200);
  fill(255);
  //das ist die Anzeige des Stimmungsbalkens
  mood.display();
}
function mousePressed() {
  if (nameWritten === true) {
    if (counter < maxCounter) {
      //die einzelnen Elemente von bubbleArray sind die Objekte der Klasse Speechbubble, die vor der function draw erzeugt wurden
      //es muss für jede Person, die Auftreten kann eine If-funktion erstellt werden. Die Anzahl ist aber überschaubar.
      if (bubbleArray[counter].person === "bP") {
        bubbleArray[counter].hitTest(0);
      } else if (bubbleArray[counter].person === "user") {
        bubbleArray[counter].hitTest(0);
      }
      if (bubbleArray[counter].hitterNumber > 0) {
        counter = counter + 1;
      }
    }
    //durch diese if-Bedingung wird die letzte Sprechblase auch angezeigt
    if (counter <= maxCounter && counter - 1 >= minCounter) {
      if (bubbleArray[counter - 1].person === "bP") {
        bubbleArray[counter - 1].hitTest(0);
      } else if (bubbleArray[counter - 1].person === "user") {
        bubbleArray[counter - 1].hitTest(0);
      }
    }
  }
}
