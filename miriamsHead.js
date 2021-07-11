import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
import AnaPersonParameter from "./AnaPersonParameter.js";
import WellBeing from "./WellBeing.js";
import Export from "./Export.js";
import Button from "./decisionButton.js";
import Situation from "./organisation/Szenes.js";
import { dialog } from "./organisation/Dialog.js";
//import { hover } from "./organisation/hover.js";
import AnaPerson from "./AnaPerson_K.js";
import { hover } from "./organisation/hover.js";
let gameState = "pregame";
let situationPerson = "friend";
let state = "street";
let visible = { dialog: true, button: false, hover: false, feedback: false };
//bP
let parameter = new AnaPersonParameter(0, -2);
let mood = new WellBeing(100, 100, parameter.trigger, parameter.wellBeing);
let situation = new Situation(state, situationPerson);
let bPbubble = new PersonalBubble("#c9a6b9", "left");
let userbubble = new PersonalBubble("#e2efde", "right");
let auntbubble = new PersonalBubble("#d9d9d9", "right");
let sisterbubble = new PersonalBubble("#d9d9d9", "right");
let lenibubble = new PersonalBubble("#d9d9d9", "right");
//für die Namensarrays
let pbNameArray = [];
let bPName = " du ";
let currentMood = "neutral";
let thought = "";
let ana = new AnaPerson(100, 300, 250, 400, bPName, currentMood, thought);
let nameWritten = false;
let three = false;
mood.wellBeing = 0;
//bubble

dialog(situationPerson, state);
let counter = minSpeechbubble;
//in bubbleArray werden alle Objekte definiert
let bubbleArray = [];
let y = 600;
//button

let allTheButtons = [];
let buttonNumber1 = 0;
let buttonNumber2 = 1;
let buttonNumber3 = 2;
let alltheThoughts = [];
//in person und messageArray müssen an gleicher Stelle im Array die Inhalte (also wer sagt was) definiert werden
function keyPressed() {
  if (keyIsDown(8)) {
    //löschen
    pbNameArray.pop();
  }
  if (keyIsDown(32)) {
    //Leertaste
    pbNameArray.pop();
    pbNameArray.push(" ");
  }


  fill(0, 255, 0);
}

function keyTyped(){
  pbNameArray.push(key);  
  if (keyIsDown(13)) { //enter
    pbNameArray.pop();
    nameWritten = true;
  }
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
}


function mouseClicked() {
  if (gameState === "pregame") {
  }
  if (nameWritten === true) {
    if (state === "street") {
      visible.hover = false;
      visible.dialog = true;
      buttonNumber1 = 0;
      buttonNumber2 = 1;
      if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
        visible.button = true;
        visible.dialog = false;
        if (visible.button === true && allTheButtons[0].hitTest()) {
          if (mood.wellBeing < 3) {
            mood.wellBeing++;
          }
          state = "duck";
          counter = 20;
          dialog(situationPerson, state);
          visible.dialog = true;
          visible.button = false;
          visible.hover = true;
          thought = 5;
        }
        if (visible.button === true && allTheButtons[1].hitTest()) {
          if (mood.wellBeing > -3) {
            mood.wellBeing--;
          }
          state = "leni";
          buttonNumber1 = 4;
          buttonNumber2 = 5;
          //  visible.hover = false;
        }
      }
    } else if (state === "duck") {
      dialog(situationPerson, state);

      visible.dialog = true;
      buttonNumber1 = 2;
      buttonNumber2 = 3;
      visible.hover = true;
      thought = 5;
      if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
        visible.button = true;
        if (
          visible.button === true &&
          (allTheButtons[2].hitTest() || allButtons[3].hitTest())
        ) {
          if (mood.wellBeing < 3) {
            mood.wellBeing++;
          }
        }
      }
    } else if (state === "leni") {
      visible.hover = false;
      visible.button = true;
      if (visible.button === true && allTheButtons[4].hitTest()) {
        if (mood.wellBeing > -3) {
          mood.wellBeing--;
        }
        counter = 22;
        state = "leniNear";
        dialog(situationPerson, state);
        visible.hover = true;
        thought = 5;
        visible.button = false;
      }

      visible.dialog = true;
      if (visible.button === true && allTheButtons[5].hitTest()) {
        //neutral
        state = "school1";

        counter = 27;
        dialog(situationPerson, state);
        console.log("Hier wird schule angezeigt aus Leni");
        visible.button = false;
        buttonNumber1 = 6;
        buttonNumber2 = 7;
      }
    } else if (state === "leniNear") {
      visible.hover = true;
      thought = 5;
      visible.dialog = true;
      if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
        state = "school1";

        counter = 27;
        dialog(situationPerson, state);
        console.log("Hier wird schule angezeigt aus LeniNear");
        visible.button = false;
        visible.dialog = true;
        buttonNumber1 = 6;
        buttonNumber2 = 7;
      }
    } else if (state === "school1") {
      visible.hover = false;
      console.log(bubbleArray[counter].message);
      console.log("School1");
      visible.dialog = true;
      visible.button = true;
      if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
        console.log("m");
        visible.button = true;
        if (allTheButtons[6].hitTest()) {
          if (mood.wellBeing < 3) {
            mood.wellBeing++;
          }
        }
      }
      /* das muss vor den state = "television1";

        visible.button = false;
        dialog(situationPerson, state);
        counter = 95;
        buttonNumber1 = 38;
        buttonNumber2 = 39;
        */
      if (allTheButtons[7].hitTest()) {
        if (mood.wellBeing > -3) {
          mood.wellBeing--;
        }
        state = "television1";
        visible.button = false;
        dialog(situationPerson, state);
        counter = 96;
        buttonNumber1 = 38;
        buttonNumber2 = 39;
      }
      /*counter = 29;
          dialog(situationPerson, state);
          visible.dialog = true;
          visible.button = false;*/
    } /*else if (state === "school2") {
        visible.dialog = true;
        if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
          visible.button = true;
        }
      } */ else if (state === "television1") {
      visible.hover = false;
      console.log(bubbleArray[counter].mouseHittet + " c");

      if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
        visible.button = true;
        if (visible.button === true && allTheButtons[38].hitTest()) {
          if (mood.wellBeing > -3) {
            mood.wellBeing--;
          }
          state = "television2";
          visible.button = false;
          dialog(situationPerson, state);
          counter = 98;
          three = true;
          buttonNumber1 = 40;
          buttonNumber2 = 42;
          buttonNumber3 = 41;
        }
        if (visible.button === true && allTheButtons[39].hitTest()) {
          if (mood.wellBeing < 3) {
            mood.wellBeing++;
          }
          state = "television2";
          visible.button = false;
          dialog(situationPerson, state);
          counter = 98;
          three = true;
          buttonNumber1 = 40;
          buttonNumber2 = 42;
          buttonNumber3 = 41;
        }
      }
    } else if (state === "television2") {
      visible.hover = false;
      visible.dialog = true;
      if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
        visible.button = true;
        if (visible.button === true && allTheButtons[40].hitTest()) {
          //neutral
          state = "television3";
          visible.button = false;
          dialog(situationPerson, state);
          visible.hover = true;
          thought = 7;
          counter = 99;
        }
        if (visible.button === true && allTheButtons[41].hitTest()) {
          if (mood.wellBeing < 3) {
            mood.wellBeing++;
          }
          state = "television3";
          visible.button = false;
          dialog(situationPerson, state);
          visible.hover = true;
          thought = 7;
          visible.hover = true;
          thought = 7;
          counter = 99;
        }
        if (visible.button === true && allTheButtons[42].hitTest()) {
          if (mood.wellBeing < 3) {
            mood.wellBeing++;
          }
          state = "television3";
          visible.button = false;
          dialog(situationPerson, state);
          visible.hover = true;
          thought = 7;
          counter = 99;
        }
      }
    } else if (state === "television3") {
      visible.dialog = true;
    } else if (state === "shopping") {
      state = "shopping";
      visible.button = false;
      dialog(situationPerson, state);
      counter = 74;
      buttonNumber1 = 11;
      buttonNumber2 = 17;
      visible.dialog = true;
      if (visible.button === true && allTheButtons[18].hitTest()) {
        if (mood.wellBeing < 3) {
          mood.wellBeing++;
        }
        state = "flower";
        visible.button = false;
        dialog(situationPerson, state);
        counter = 74;
      }
      if (visible.button === true && allTheButtons[17].hitTest()) {
        if (mood.wellBeing > -3) {
          mood.wellBeing--;
        }
        state = "backery";

        //visible.dialog = false; //wieder rein
        visible.button = true;
        buttonNumber1 = 30;
        buttonNumber2 = 20;
      }
    } else if (state === "flower") {
      visible.dialog = true;
    } else if (state === "backery") {
      if (visible.button === true && allTheButtons[22].hitTest()) {
        if (mood.wellBeing < 3) {
          mood.wellBeing++;
        }
      }
      if (visible.button === true && allTheButtons[20].hitTest()) {
        if (mood.wellBeing > -3) {
          mood.wellBeing--;
        }
        visible.dialog = true;
        if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
          state = "music";
        }
      }
    }
    if (state === "television 3") {
      if (bubbleArray[maxSpeechbubble].hitTest()) {
        //finales feedback
      }
    }
    if (counter < maxSpeechbubble) {
      bubbleArray[counter].hitTest(0);

      if (bubbleArray[counter].hitterNumber > 0) {
        counter = counter + 1;
      }
    }

    if (counter <= maxSpeechbubble && counter - 1 >= minSpeechbubble) {
      bubbleArray[counter - 1].hitTest(0);
    }
    if (counter === maxSpeechbubble - 1) {
      //visible.dialog = false; // wieder rein
    }
  }
}

function draw() {
  background(255);
  if (nameWritten === true) {
    bPName = pbNameArray.join("");
    situation.background(
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
      wohnzimmer
    );

    situation.situation = state;

    /*if (state === "school1") {
      schoolBubble = new SpeechBubble(
        "Was glaubst du, wann ich wieder an die Schule gehen kann?",
        "user",
        ""
      );
      schoolBubble.y = 450;

      schoolBubble.all(userbubble.direction, userbubble.color);
      schoolBubble.hitTest();
    }*/
    let data = new Export(bPName);
    ana.hoverthought = data.hoverMessage[thought];
    ana.mood();
    console.log(thought);
    if (visible.hover === true) {
      console.log("hover");
      ana.hover();
    }
    // if (visible.dialog === true) {
    //console.log("draw aufgerufen");
    for (let i = 0; i < data.dialogMessage.length; i++) {
      bubbleArray.push(
        new SpeechBubble(
          data.dialogMessage[i],
          data.person[i],
          data.dialogMessage[i + 1]
        )
      );
      if (i === maxSpeechbubble - 1) {
        bubbleArray.push(
          new SpeechBubble(data.dialogMessage[i], data.person[i], ". .")
        );
      }
    }
    if (visible.dialog === true) {
      if (state === "school1") {
        //bubbleArray[counter].height = 50;
        bubbleArray[counter].all(userbubble.direction, userbubble.color);
      }

      if (counter < maxSpeechbubble) {
        bubbleArray[counter].y =
          600 -
          bubbleArray[counter].messageHeight(bubbleArray[counter].textLeading);
      }
      //console.log("Person: "+bubbleArray[counter].person);

      if (counter < maxSpeechbubble) {
        //die einzelnen Elemente von bubbleArray sind die Objekte der Klasse Speechbubble, die vor der function draw erzeugt wurden
        //es muss für jede Person, die Auftreten kann eine If-funktion erstellt werden. Die Anzahl ist aber überschaubar.
        if (bubbleArray[counter].person === "bP") {
          bubbleArray[counter].all(bPbubble.direction, bPbubble.color);
        } else if (bubbleArray[counter].person === "user") {
          bubbleArray[counter].all(userbubble.direction, userbubble.color);
        } else if (bubbleArray[counter].person === "Leni") {
          bubbleArray[counter].all(lenibubble.direction, lenibubble.color);
        } else if (bubbleArray[counter].person === "sister") {
          bubbleArray[counter].all(sisterbubble.direction, sisterbubble.color);
        } else if (bubbleArray[counter].person === "aunt") {
          bubbleArray[counter].all(auntbubble.direction, auntbubble.color);
        }
        if (bubbleArray[counter].hitterNumber > 0) {
          counter = counter + 1;
        }
      }

      //durch diese if-Bedingung wird die letzte Sprechblase auch angezeigt
      //Sprechblasen gehen langsam nach oben
      if (counter < maxSpeechbubble && counter - 1 >= minSpeechbubble) {
        if (bubbleArray[counter - 1].person === "bP") {
          bubbleArray[counter - 1].all(bPbubble.direction, bPbubble.color);
        } else if (bubbleArray[counter - 1].person === "user") {
          bubbleArray[counter - 1].all(userbubble.direction, userbubble.color);
        } else if (bubbleArray[counter - 1].person === "Leni") {
          bubbleArray[counter - 1].all(lenibubble.direction, lenibubble.color);
        } else if (bubbleArray[counter - 1].person === "sister") {
          bubbleArray[counter - 1].all(
            sisterbubble.direction,
            sisterbubble.color
          );
        } else if (bubbleArray[counter - 1].person === "aunt") {
          bubbleArray[counter - 1].all(auntbubble.direction, auntbubble.color);
        }
      }
    }
    //screenOrganisation
    for (let i = 0; i < data.buttonMessage.length; i++) {
      allTheButtons.push(
        new Button(data.buttonX[i], data.buttonY[i], data.buttonMessage[i])
      );
    }
    /*for (let i = 0; i < data.hoverMessage; i++) {
      alltheThoughts.push(
        new AnaPerson(
          100,
          100,
          200,
          300,
          bPName,
          "neutral",
          data.hoverMessage[i]
        )
      );
    }*/
    /* if (visible.hover === true) {
      hoverNumber;
    }*/
    /*if (this.mouseIsPressed) {
      if (bubbleArray[counter].hitTest()) {*/
    if (visible.button === true) {
      allTheButtons[buttonNumber1].display(allTheButtons[buttonNumber2].height);
      allTheButtons[buttonNumber2].display(allTheButtons[buttonNumber1].height);
      if (three === true) {
        allTheButtons[buttonNumber3].display();
      }
    }
    fill(255);
    mood.display();
    if (mood.wellBeing < -1) {
      ana.currentMood = "scared";
    } else if (mood.wellBeing >= -1 && mood.wellBeing <= 1) {
      ana.currentMood = "neutral";
    } else if (mood.wellBeing > 1) {
      ana.currentMood = "happy";
    }
  }
  fill(0);
  textSize(20);
  if (nameWritten === false) {
    text("Hallo. Ich heiße " + pbNameArray.join(""), 100, 200);
  }
}
