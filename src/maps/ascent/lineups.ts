import path from "path";

import type { Lineup } from "../../types";

import { type Agent, imageMap, type MapArea, Utility } from "../../types";

import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";
import image8 from "./images/8.png";
import image9 from "./images/9.png";
import image10 from "./images/10.png";
import image11 from "./images/11.png";
import image12 from "./images/12.png";
import image13 from "./images/13.png";
import image14 from "./images/14.png";
import image15 from "./images/15.png";
import image16 from "./images/16.png";
import image17 from "./images/17.png";
import image18 from "./images/18.png";
import image19 from "./images/19.png";

export const areasFrom = [
  {
    title: "A TreeHouse Box",
    x: 556,
    y: 218,
    width: 7,
    height: 7,
  },
  {
    title: "A Main Box",
    x: 543,
    y: 448,
    width: 7,
    height: 7,
  },
  {
    title: "A Tree Tree",
    x: 506,
    y: 288,
    width: 7,
    height: 7,
  },
  {
    title: "A CT Corner",
    x: 601,
    y: 102,
    width: 7,
    height: 7,
  },
  {
    title: "A Mid Boxes",
    x: 509,
    y: 384,
    width: 7,
    height: 7,
  },
  {
    title: "B Main Box",
    x: 134,
    y: 420,
    width: 11,
    height: 11,
  },
  {
    title: "CT Triple Barrels",
    x: 447,
    y: 161,
    width: 7,
    height: 7,
  },
] as const; // Ideally we would ensure this satisfies MapArea[] but that is extremely hard to do

export const areasTo = [
  {
    title: "A Dice",
    x: 674,
    y: 231,
    width: 32,
    height: 28,
  },
  {
    title: "A Wine",
    x: 721,
    y: 368,
    width: 39,
    height: 34,
  },
  {
    title: "A Generator",
    x: 610,
    y: 238,
    width: 24,
    height: 24,
  },
  {
    title: "A Outside Gen",
    x: 626,
    y: 264,
    width: 24,
    height: 24,
  },
  {
    title: "B Default Box",
    x: 98,
    y: 208,
    width: 21,
    height: 22,
  },
  {
    title: "B Far Box",
    x: 112,
    y: 156,
    width: 21,
    height: 21,
  },
  {
    title: "B Opposite Lane",
    x: 175,
    y: 156,
    width: 29,
    height: 23,
  },
] as const; // Ideally we would ensure this satisfies MapArea[] but that is extremely hard to do

export const lineups: Lineup<FromAreaTitles, ToAreaTitles>[] = [
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Main Box",
    toTitle: "A Outside Gen",

    imageStuff: [{ image: image2, notes: ["Q under Double-Dash Thing"] }],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Mid Boxes",
    toTitle: "A Outside Gen",

    imageStuff: [
      {
        image: image3,
        notes: ["Hug the tiny box (must be up on ONE stair!)"],
      },
    ],
  },

  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A TreeHouse Box",
    toTitle: "A Wine",

    imageStuff: [
      {
        image: image4,
        notes: [
          "Throw at 9s",
          "Stand to the RIGHT SIDE of the box",
          "Insta-jump throw",
        ],
      },

      {
        image: image5,
        notes: [],
      },
    ],
  },

  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "B Main Box",
    toTitle: "B Opposite Lane",

    imageStuff: [{ image: image6, notes: ["Insta-jump throw"] }],
  },

  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "B Main Box",
    toTitle: "B Default Box",

    imageStuff: [{ image: image7, notes: ["Stand-throw"] }],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "CT Triple Barrels",
    toTitle: "B Default Box",

    imageStuff: [
      {
        image: image8,
        notes: [
          "Lineup above lower spike, and to the left of the other one",
          "Insta jump-throw",
        ],
      },
    ],
  },

  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "B Main Box",
    toTitle: "B Far Box",

    imageStuff: [{ image: image9, notes: [] }],
  },

  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "B Main Box",
    toTitle: "B Opposite Lane",

    imageStuff: [
      {
        image: image10,
        notes: ["Jump insta-throw", "Turret bullet touching <that thing>"],
      },
    ],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Main Box",
    toTitle: "A Generator",

    imageStuff: [{ image: image11, notes: ["Aim directly at peak of spike"] }],
  },

  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Main Box",
    toTitle: "A Dice",

    imageStuff: [
      {
        image: image12,
        notes: [
          "Aim directly at peak of spike",
          "Stand-throw, or jump-peak-throw (to land on the box)",
        ],
      },
    ],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Mid Boxes",
    toTitle: "A Dice",

    imageStuff: [
      { image: image13, notes: ["Insta jump-throw", "Aim middle-ish of box"] },
    ],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A CT Corner",
    toTitle: "A Outside Gen",

    imageStuff: [{ image: image15, notes: [] }],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A CT Corner",
    toTitle: "A Generator",

    imageStuff: [
      { image: image14, notes: ["Turret Bullet against this corner"] },
    ],
  },
];

export type FromAreaTitles = (typeof areasFrom)[number]["title"];
export type ToAreaTitles = (typeof areasTo)[number]["title"];
export type AllAreaTitles = FromAreaTitles | ToAreaTitles;

let temp: MapArea<AllAreaTitles>[] = [...areasFrom, ...areasTo];

for (let i = 0; i < lineups.length; i++) {
  for (let j = i + 1; j < lineups.length; j++) {
    if (
      lineups[i].fromTitle === lineups[j].fromTitle &&
      lineups[i].toTitle === lineups[j].toTitle
    ) {
      console.warn(
        "Duplicate lineup FROM and TO detected: ",
        lineups[i],
        lineups[j]
      );
    }
  }
}

// for (let i = 0; i < lineups.length; i++) {
//   for (let j = i + 1; j < lineups.length; j++) {
//     for (const imgUrl of lineups[i].imageSources) {
//       if (lineups[j].imageSources.includes(imgUrl)) {
//         console.debug("Duplicate lineup image detected: ", imgUrl);
//       }
//     }
//   }
// }
