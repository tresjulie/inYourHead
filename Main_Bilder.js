//eigentlich nur für die preloads der Bilder und die Screen Anzeigen

import Startscreen from "./StartScreen.js";
import TutorialScreen from "./TutorialScreen.js";
import VerstaendnisScreen from "./VerstaendnisScreen.js";
import ChooseScreen from "./ChooseScreen.js";
import FamilyScreen from "./Familyscreen.js";
import FriendsScreen from "./FriendsScreen.js";
import DankeScreen from "./DankeScreen.js";

let startscreen = new Startscreen();
let tutscreen = new TutorialScreen();
let verstaendnisscreen = new VerstaendnisScreen();
let choosescreen = new ChooseScreen();
let familyscreen = new FamilyScreen();
let friendsscreen = new FriendsScreen();
let dankescreen = new DankeScreen();

let state = "start";

function preload() {
  startscreen.picture = loadImage("Screens_ohneButtons/StartScreen.jpg");
  tutscreen.picture1 = loadImage("Screens_ohneButtons/Tutorial_1.jpg");
  tutscreen.picture2 = loadImage("Screens_ohneButtons/Tutorial_2.jpg");
  verstaendnisscreen.picture = loadImage(
    "Screens_ohneButtons/Verstaendnistext.jpg"
  );
  choosescreen.picture = loadImage("Screens_ohneButtons/Position.jpg");
  familyscreen.picture = loadImage("Screens_ohneButtons/Elternteil.jpg");
  friendsscreen.picture = loadImage("Screens_ohneButtons/FreundIn.jpg");
  dankescreen.picture = loadImage("Screens_ohneButtons/DankeScreen.jpg");
}

function draw() {
  clear();
  if (state === "start") {
    startscreen.display();
  } else if (state === "tutorialone") {
    tutscreen.displayfirst();
  } else if (state === "tutorialtwo") {
    tutscreen.displaysecond();
  } else if (state === "verstaendnis") {
    verstaendnisscreen.display();
  } else if (state === "choose") {
    choosescreen.display();
  } else if (state === "family") {
    familyscreen.display();
  } else if (state === "friends") {
    friendsscreen.display();
  } else if (state === "end") {
    dankescreen.display();
  }
}

function mouseClicked() {
  if (state === "start" && startscreen.hitTestSpiel() === true) {
    state = "verstaendnis";
  } else if (state === "start" && startscreen.hitTestTutorial() === true) {
    state = "tutorialone";
  } else if (state === "tutorialone" && tutscreen.hitTestWeiter() === true) {
    state = "tutorialtwo";
  } else if (
    state === "tutorialtwo" &&
    tutscreen.hitTestVerstanden() === true
  ) {
    state = "verstaendnis";
  } else if (
    state === "verstaendnis" &&
    verstaendnisscreen.hitTest() === true
  ) {
    state = "choose";
  } else if (state === "choose" && choosescreen.hitTestFreunde() === true) {
    state = "friends";
  } else if (state === "choose" && choosescreen.hitTestFamilie() === true) {
    state = "family";
  } else if (state === "family" && familyscreen.hitTest() === true) {
    console.log("Familie");
  } else if (state === "friends" && friendsscreen.hitTest() === true) {
    console.log("Freunde");
  } else if (state === "end" && dankescreen.hitTest() === true) {
    state = "start";
  }
}
