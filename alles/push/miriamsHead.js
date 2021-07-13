import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
import AnaPersonParameter from "./AnaPersonParameter.js";
import WellBeing from "./WellBeing.js";
import Export from "./Export.js";
import Button from "./Button.js";
import Situation from "./organisation/Szenes.js";
import { dialog } from "./organisation/Dialog.js";
//import { hover } from "./organisation/hover.js";
import AnaPerson from "./AnaPerson_K.js";

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
}
function mouseClicked() {
  if (nameWritten === true) {
    if (state === "street") {
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
      visible.button = true;
      if (visible.button === true && allTheButtons[4].hitTest()) {
        counter = 22;
        state = "leniNear";
        dialog(situationPerson, state);

        visible.button = false;
        //  counter = 21;
        //   minSpeechbubble = 21;
        //  maxSpeechbubble = 26;
      }
      visible.dialog = true;
      if (visible.button === true && allTheButtons[5].hitTest()) {
        state = "school1";
        schoolBubble = new SpeechBubble(
          "Was glaubst du, wann ich wieder an die Schule gehen kann?",
          "user",
          ""
        );
        schoolBubble.all(userbubble.direction, userbubble.color);
        schoolBubble.hitTest();
        counter = 27;
        dialog(situationPerson, state);
        console.log("Hier wird schule angezeigt aus Leni");
        visible.button = true;
        buttonNumber1 = 6;
        buttonNumber2 = 7;
      }
    } else if (state === "leniNear") {
      //dialog(situationPerson, state);
      visible.dialog = true;
      if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
        state = "school1";

        schoolBubble.all(userbubble.direction, userbubble.color);
        schoolBubble.hitTest();
        counter = 27;
        dialog(situationPerson, state);
        console.log("Hier wird schule angezeigt aus LeniNear");
        visible.button = true;
        visible.dialog = true;
        buttonNumber1 = 6;
        buttonNumber2 = 7;
      }
    } else if (state === "school1") {
      console.log(bubbleArray[counter].message);
      console.log("School1");
      visible.dialog = true;
      if (allTheButtons[6].hitTest()) {
        state = "television1";
        visible.button = false;
        dialog(situationPerson, state);
        counter = 95;
        buttonNumber1 = 38;
        buttonNumber2 = 39;
        /*counter = 28;
          dialog(situationPerson, state);
          visible.dialog = true;
          visible.button = false;*/
      }

      if (allTheButtons[7].hitTest()) {
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
      console.log(bubbleArray[counter].mouseHittet + " c");

      if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
        visible.button = true;
        if (visible.button === true && allTheButtons[38].hitTest()) {
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
      visible.dialog = true;
      if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
        visible.button = true;
        if (visible.button === true && allTheButtons[40].hitTest()) {
          state = "television3";
          visible.button = false;
          dialog(situationPerson, state);
          counter = 99;
        }
        if (visible.button === true && allTheButtons[41].hitTest()) {
          state = "television3";
          visible.button = false;
          dialog(situationPerson, state);
          counter = 99;
        }
        if (visible.button === true && allTheButtons[42].hitTest()) {
          state = "television3";
          visible.button = false;
          dialog(situationPerson, state);
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
      if (visible.button === true && allTheButtons[11].hitTest()) {
        state = "flower";
        visible.button = false;
        dialog(situationPerson, state);
        counter = 74;
      }
      if (visible.button === true && allTheButtons[17].hitTest()) {
        state = "backery";

        //visible.dialog = false; //wieder rein
        visible.button = true;
        buttonNumber1 = 30;
        buttonNumber2 = 20;
      }
    } else if (state === "flower") {
      visible.dialog = true;
    } else if (state === "backery") {
      if (visible.button === true && allTheButtons[30].hitTest()) {
      }
      if (visible.button === true && allTheButtons[20].hitTest()) {
        visible.dialog = true;
        if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
          state = "music";
        }
      }
    }

    /* if (visible.button === true && allTheButtons[4].hitTest()) {
          this.state = "leniNear";
        }
        if (visible.button === true && allTheButtons[4].hitTest()) {
          this.state = "school1";
        }*/
    /*  }
    }*/
    /* if (allTheButtons[2].hitTest()) {
      //  feedbackNumber = 0;
      //  visible.hover = true;
      visible.dialog = true;
    }
    if (allTheButtons[3].hitTest()) {
      //     feedbackNumber = 1;
      // visible.hover = true;
      visible.dialog = true;
    }
    if (allTheButtons[4].hitTest()) {
      //   feedbackNumber = 2;
      state = "leniNear";
      visible.button = false;
      visible.dialog = true;
      //  visible.hover = true;
      if (bubbleArray[maxCounter].hitTest()) {
        //    visible.feedback = true;
        /* if(feedback.hitTest()){
           this.state="school1";
             visible.hover=false;
             visible.feedback=false;
         } */
    /*  }
    }
    if (allTheButtons[5].hitTest()) {
      state = "school1";
      visible.button = false;
    }
    if (state === "school1") {
      visible.dialog = true;
      if (bubbleArray[maxCounter].hitTest()) {
        visible.button = true;
      }
    }
    if (allTheButtons[6].hitTest()) {
      //     feedbackNumber = 3;
      state = "school2";
      if (bubbleArray[maxCounter].hitTest()) {
        state = "shopping";
        //zwischenfeedback
      }
    }
    if (allTheButtons[7].hitTest()) {
      //    feedbackNumber = 4;
      state = "school3";
      if (bubbleArray[maxCounter].hitTest()) {
        state = "shopping";
        //zwischenfeedback
      }
    }
    if (state === "shopping") {
      //    visible.hover = false;
      //    visible.feedback = false;
      visible.dialog = true;
      visible.button = false;
      if (bubbleArray[maxCounter].hitTest()) {
        visible.button = true;
      }
    }
    if (state === "kitchen") {
      visible.dialog = true;
    }
    if (allTheButtons[8].hitTest()) {
      visible.dialog = true;
    }
    if (allTheButtons[9].hitTest()) {
      //     feedbackNumber = 5;
      state = "park";
    }
    if (allTheButtons[10].hitTest()) {
      state = "park";
    }
    if (allTheButtons[11].hitTest()) {
      state = "park";
    }
    if (allTheButtons[12].hitTest()) {
      state = "park";
    }
    if (allTheButtons[13].hitTest()) {
      //    feedbackNumber = 6;
      state = "park";
    }

    if (allTheButtons[14].hitTest()) {
      state = "park";
    }
    if (allTheButtons[15].hitTest()) {
      state = "park";
    }
    if (allTheButtons[16].hitTest()) {
      state = "park";
    }
    if (allTheButtons[17].hitTest() && situationPerson === "friend") {
      state = "bakery";
      //  visible.hover = true;
    }
    if (allTheButtons[17].hitTest() && situationPerson === "parents") {
      state = "bakery";
      //    visible.hover = true;
    }
    if (allTheButtons[18].hitTest() && situationPerson === "friend") {
      state = "flower";
      //   visible.hover = true;
      visible.dialog = true;
      if (bubbleArray[maxCounter].hitTest()) {
        state = "music";
      }
    }
    if (allTheButtons[18].hitTest() && situationPerson === "parents") {
      state = "flower";
      // visible.hover = true;
      visible.dialog = true;
      if (bubbleArray[maxCounter].hitTest()) {
        //feedback
        state = "auntHouseWithbP1";
      }
    }
    if (allTheButtons[19].hitTest()) {
      //    feedbackNumber = 7;
      //  visible.hover = false;
      //   visible.feedback = true;
      visible.dialog = true;
      if (bubbleArray[maxCounter].hitTest()) {
        //feedback
        state = "auntHouseWithbP1";
      }
    }
    if (allTheButtons[20].hitTest() && situationPerson === "parents") {
      //        visible.hover = true;
      //   visible.feedback = true;
      visible.dialog = true;
      if (bubbleArray[maxCounter].hitTest()) {
        //feedback
        state = "auntHouseWithbP1";
      }
    }
    if (allTheButtons[20].hitTest() && situationPerson === "friend") {
      //   feedbackNumber = 8;
      //      visible.hover = true;
      //   visible.feedback = true;
      visible.dialog = true;
      if (bubbleArray[maxCounter].hitTest()) {
        state = "music";
      }
    }
    if (allTheButtons[21].hitTest()) {
      //     feedbackNumber = 9;
      state = "music2";
      //  visible.feedback = true;
      //     visible.hover = true;
      visible.dialog = true;
      if (bubbleArray[maxCounter].hitTest()) {
        state = "mobilephone1";
        //zwischenfeedback
      }
    }
    if (state === "mobilephone1") {
      visible.dialog = true;
    }
    if (allTheButtons[22].hitTest()) {
      //    feedbackNumber = 10;
      //   visible.feedback = true;
     /*feedback.hittest und zwischenfeedback */
    /*  }
    if (allTheButtons[23].hitTest()) {
      state = "park";
    }
    if (allTheButtons[24].hitTest()) {
      state = "park";
    }
    if (allTheButtons[25].hitTest()) {
      //    feedbackNumber = 11;
      state = "park";
    }
    if (allTheButtons[26].hitTest()) {
      //     feedbackNumber = 12;
      state = "park";
    }
    if (allTheButtons[27].hitTest()) {
      //     feedbackNumber = 13;
      state = "park";
    }
    if (allTheButtons[28].hitTest()) {
      //  feedbackNumber = 14;
      state = "park";
    }
    if (allTheButtons[29].hitTest()) {
      //  feedbackNumber = 15;
      state = "park";
    }*/
    // if (allTheButtons[30].hitTest()) {
    //   feedbackNumber = 16;
    //  visible.hover = false;
    //   visible.feedback = true;
    /* if (feedback.hitTest()) {
          state = "music";
        }*/
    /*}
    if (state === "music") {
      //    visible.hover = false;
      //  visible.feedback = false;
      visible.dialog = true;
      visible.button = false;
    }
    if (allTheButtons[31].hitTest()) {
      state = "mobilephone2";
      //    visible.hover = false;
      //    visible.feedback = false;
      visible.dialog = true;
      visible.button = false;
      if (bubbleArray[maxCounter].hitTest()) {
        state = "oberfeld1";
      }
    }
    if (allTheButtons[32].hitTest()) {
      state = "mobilephone3";
      //    visible.hover = false;
      //  visible.feedback = false;
      visible.dialog = true;
      visible.button = false;
      if (bubbleArray[maxCounter].hitTest()) {
        state = "park1";
      }
    }
    if (state === "oberfeld1") {
      //     visible.hover = false;
      //  visible.feedback = false;
      visible.dialog = true;
      visible.button = false;
    }
    if (state === "park1") {
      //   visible.hover = false;
      //   visible.feedback = false;
      visible.dialog = true;
      visible.button = false;
    }
    if (allTheButtons[33].hitTest()) {
      state = "oberfeld3";
    }
    if (allTheButtons[34].hitTest()) {
      state = "oberfeld3";
    }
    if (allTheButtons[35].hitTest()) {
      //    visible.hover = false;
      //    visible.feedback = false;
      visible.dialog = true;
      visible.button = false;
      if (bubbleArray[maxCounter].hitTest()) {
        state = "oberfeld3";
      }
    }
    if (state === "oberfeld3") {
      //     visible.hover = true;
      //    visible.feedback = false;
      visible.dialog = true;
      visible.button = false;
      if (bubbleArray[maxCounter].hitTest()) {
        state = "picknick";
      }
    }
    if (allTheButtons[36].hitTest()) {
      //   feedbackNumber = 17;
      state = "park";
    }
    if (state === "television1") {
      visible.dialog = true;
    }
    if (allTheButtons[37].hitTest()) {
      //   feedbackNumber = 18;
      state = "park";
    }
    if (allTheButtons[38].hitTest()) {
      //    feedbackNumber = 19;
      //if feedbackhitTest
      state = "television2";
    }
    if (allTheButtons[39].hitTest()) {
      //   feedbackNumber = 20;
      //if feedbackhitTest
      state = "television2";
    }
    if (state === "television2") {
      visible.dialog = true;
    }
    if (visible.button === true && allTheButtons[40].hitTest()) {
      //   feedbackNumber = 21;
      //   visible.hover = true;
      //if feedbackhitTest
      state = "television3";
    }
    if (visible.button === true && allTheButtons[41].hitTest()) {
      // feedbackNumber = 22;
      //     visible.hover = true;
      //if feedbackhitTest
      state = "television3";
    }
    if (visible.button === true && allTheButtons[42].hitTest()) {
      //   feedbackNumber = 23;
      //      visible.hover = true;
      //if feedbackhitTest
      state = "television3";
    }
*/
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
      allTheButtons[buttonNumber1].display();
      allTheButtons[buttonNumber2].display();
      if (three === true) {
        allTheButtons[buttonNumber3].display();
      }
    }
    fill(255);
    mood.display();
    if (situation === "street") {
      minSpeechbubble = 16;
      maxSpeechbubble = 20;
    }
    if (situation === "duck") {
      minSpeechbubble = 20;
      maxSpeechbubble = 23;
    }

    if (situation === "leniNear") {
      minSpeechbubble = 22;
      maxSpeechbubble = 26;
    }

    if (situation === "school1") {
      minSpeechbubble = 27;
      maxSpeechbubble = 30;
    }
  }
  fill(0);
  textSize(20);
  if (nameWritten === false) {
    text("Hallo. Ich heiße " + pbNameArray.join(""), 100, 200);
  }
}
