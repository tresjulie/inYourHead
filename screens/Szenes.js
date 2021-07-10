export default class Situation {
  constructor(situation, person) {
    this.situation = situation;
    this.person = person;
    // this.minSpeechbubble = 0;
    //this.maxSpeechbubble = 1;
    this.hoverNumber = 0;
    this.buttonNumber = { one: 0, two: 0, three: 0 };
    this.feedback = 0;
    this.picture = "";
  }
  /*hover() {
    if (this.person === "friend") {
      if (this.situation === "duck") {
        this.hoverNumber = 5;
      }

      if (this.situation === "leniNear") {
        this.hoverNumber = 6;
      }
      if (this.situation === "backery") {
        this.hoverNumber = 3;
      }
      if (this.situation === "flower") {
        this.hoverNumber = 4;
      }
      if (this.situation === "music2") {
        this.hoverNumber = 11;
      }
      if (this.situation === "oberfeld3") {
        this.hoverNumber = 10;
      }
      if (this.situation === "park3") {
        this.hoverNumber = 9;
      }
      if (this.situation === "television3") {
        this.hoverNumber = 8;
      }
    }
    if ((this.person = "parent")) {
      if (this.situation === "duck") {
        this.hoverNumber = 5;
      }
      if (this.situation === "leniNear") {
        this.hoverNumber = 6;
      }
      if (this.situation === "bakery") {
        this.hoverNumber = 3;
      }
      if (this.situation === "flower") {
        this.hoverNumber = 2;
      }
      if (this.situation === "kitchen") {
      }
      if (this.situation === "dinner") {
        if (this.situation === "dinner1") {
          this.hoverNumber = 0;
        }
        if (this.situation === "dinner2") {
          this.hoverNumber = 1;
        }
      }
    }
  }*/
  button() {
    if (this.person === "friend") {
      if (this.situation === "street") {
        this.buttonNumber.one = 0;
        this.buttonNumber.two = 1;
      }
      if (this.situation === "duck") {
        this.buttonNumber.one = 2;
        this.buttonNumber.two = 3;
      }
      if (this.situation === "leni") {
        this.buttonNumber.one = 4;
        this.buttonNumber.two = 5;
      }
      if (this.situation === "school") {
        this.buttonNumber.one = 6;
        this.buttonNumber.two = 7;
      }
      if (this.situation === "shopping") {
        this.buttonNumber.one = 18;
        this.buttonNumber.two = 17;
      }
      if (this.situation === "bakery") {
        this.buttonNumber.one = 30;
        this.buttonNumber.two = 20;
      }
      if (this.situation === "music") {
        this.buttonNumber.one = 22;
        this.buttonNumber.two = 21;
      }
      if (this.situation === "mobilephone") {
        this.buttonNumber.one = 32;
        this.buttonNumber.two = 31;
      }
      if (this.situation === "oberfeld") {
        this.buttonNumber.one = 33;
        this.buttonNumber.two = 34;
        this.buttonNumber.three = 35;
        if (this === "picknick") {
          this.buttonNumber.one = 37;
          this.buttonNumber.two = 36;
        }
      }
      if (this.situation === "park") {
        this.buttonNumber.one = 33;
        this.buttonNumber.two = 34;
        this.buttonNumber.three = 35;
        if (this === "picknick") {
          this.buttonNumber.one = 37;
          this.buttonNumber.two = 36;
        }
      }

      if (this.situation === "television1") {
        this.buttonNumber.one = 38;
        this.buttonNumber.two = 39;
      }
      if (this.situation === "television2") {
        this.buttonNumber.one = 40;
        this.buttonNumber.two = 41;
        this.buttonNumber.three = 42;
      }
    }
    if ((this.person = "parent")) {
      if (this.situation === "street") {
        this.buttonNumber.one = 0;
        this.buttonNumber.two = 1;
      }
      if (this.situation === "duck") {
        this.buttonNumber.one = 3;
        this.buttonNumber.two = 2;
      }
      if (this.situation === "leni") {
        this.buttonNumber.one = 4;
        this.buttonNumber.two = 5;
      }
      if (this.situation === "school") {
        this.buttonNumber.one = 6;
        this.buttonNumber.two = 7;
      }
      if (this.situation === "shopping") {
        this.buttonNumber.one = 18;
        this.buttonNumber.two = 17;
      }
      if (this.situation === "bakery") {
        this.buttonNumber.one = 19;
        this.buttonNumber.two = 20;
      }
      if (this.situation === "kitchen") {
        this.buttonNumber.one = 9;
        this.buttonNumber.two = 8;
      }
      if (this.situation === "dinner") {
        if (this.situation === "dinner1") {
          this.buttonNumber.one = 11;
          this.buttonNumber.two = 10;
        }
        if (this.situation === "dinner2") {
          this.buttonNumber.one = 12;
          this.buttonNumber.two = 13;
        }
        if (this.situation === "dinner3") {
          this.buttonNumber.one = 14;
          this.buttonNumber.two = 16;
        }
      }
      if (this.situation === "auntHouseWithbP") {
        if (this.situation === "auntHouseWithbP1") {
          this.buttonNumber.one = 23;
          this.buttonNumber.two = 24;
        }
        if (this.situation === "auntHouseWithbP2") {
          this.buttonNumber.one = 28;
          this.buttonNumber.two = 29;
          this.buttonNumber.three = 30;
        }
      }
      if (this.situation === "auntDinner") {
        this.buttonNumber.one = 25;
        this.buttonNumber.two = 26;
        this.buttonNumber.three = 27;
      }
    }
  }
  /*instantFeedback() {
    if (this.situation === "duck") {
      if (this.situation === "duck1") {
        this.feedback = 0;
      }
      if (this.situation === "duck2") {
        this.feedback = 1;
      }
    }
    if (this.situation === "leniNear") {
      this.feedback = 2;
    }
    if (this.situation === "school") {
      this.feedback = 3;
    }

    if (this.situation === "music") {
      if (this.situation === "music1") {
        this.feedback = 9;
      }
      if (this.situation === "music2") {
        this.feedback = 10;
      }
    }

    if (this === "picknick") {
      if (this === "picknick1") {
        this.feedback = 17;
      }
      if (this === "picknick2") {
        this.feedback = 18;
      }
    }
    if (this.situation === "television") {
      if (this.situation === "TV1") {
        this.feedback = 19;
      }
      if (this.situation === "TV2") {
        this.feedback = 20;
      }
      if (this.situation === "TV3") {
        this.feedback = 21;
      }
      if (this.situation === "TV4") {
        this.feedback = 22;
      }
      if (this.situation === "TV5") {
        this.feedback = 23;
      }
    }
    if (this.situation === "bakery") {
      if (this.situation === "bakery1") {
        this.feedback = 7;
      }
      if (this.situation === "bakery2") {
        this.feedback = 8;
      }
    }
    if (this.situation === "kitchen") {
      this.feedback = 5;
    }
    if (this.situation === "dinner") {
      this.feedback = 6;
    }
    if (this.situation === "auntHouseWithbP") {
      if (this.situation === "auntHouseWithbP1") {
        thid.feedback = 14;
      }
      if (this.situation === "auntHouseWithbP2") {
        this.feedback = 15;
      }
      if (this.situation === "auntHouseWithbP3") {
        this.feedback = 16;
      }
    }
    if (this.situation === "auntDinner") {
      if (this.situation === "auntDinner1") {
        this.feedback = 11;
      }
      if (this.situation === "auntDinner2") {
        this.feedback = 12;
      }
      if (this.situation === "auntDinner3") {
        this.feedback = 13;
      }
    }
  }*/
  background(
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
  ) {
    if (this.situation === "street") {
      this.picture = haeuser;
    }
    if (this.situation === "duck") {
      this.picture = entensee;
    }
    if (this.situation === "leni") {
      this.picture = bekannteTuer;
    }
    if (this.situation === "leniNear") {
      this.picture = bekannte;
    }
    if (this.situation === "school") {
      this.picture = schule;
    }
    if (this.situation === "shopping") {
      this.picture = haeuser;
    }
    if (this.situation === "bakery") {
      this.picture = baeckerei;
    }
    if (this.situation === "flower") {
      this.picture = blumenladen;
    }
    if (this.situation === "music") {
      this.picture = musikladen;
    }
    if (this.situation === "mobilephone") {
      this.picture = handy;
    }
    if (this.situation === "oberfeld") {
      this.picture = oberfeld;
    }
    if (this.situation === "park") {
      this.picture = park;
    }
    if (this.situation === "picknick") {
      this.picture = picknick;
    }
    if (
      this.situation === "television1" ||
      this.situation === "television2" ||
      this.situation === "television3"
    ) {
      this.picture = wohnzimmer;
    }
    if (this.situation === "kitchen") {
      this.picture = kueche;
    }
    if (this.situation === "dinner") {
      this.picture = abendessen;
    }
    if (this.situation === "auntHouseWithbP") {
      this.picture = tanteDraussenBp;
    }
    if (this.situation === "auntHouse") {
      this.picture = tanteDraussen;
    }
    if (this.situation === "auntDinner") {
      this.picture = tanteEssen;
    }
    if (this.situation === "plate") {
      this.picture = teller;
    }
    image(this.picture, 0, 0, 1162, 700);
  }
}
