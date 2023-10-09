import path from "path";

import type { Lineup } from "../../types";

import { type Agent, imageMap, type MapArea, Utility } from "../../types";

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

    fromTitle: "A CT Corner",
    toTitle: "A Outside Gen",

    notes: [],
    imageSources: ["https://i.ibb.co/QbtyfBn/3.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Main Box",
    toTitle: "A Outside Gen",

    notes: ["Q under Double-Dash Thing"],
    imageSources: ["https://i.ibb.co/Kw3rZFL/image.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Mid Boxes",
    toTitle: "A Outside Gen",

    notes: ["Hug the tiny box (must be up on ONE stair!)"],
    imageSources: ["https://i.ibb.co/S5kSxNM/Hug-tiny-box-up-on-1-stair.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A TreeHouse Box",
    toTitle: "A Wine",

    notes: [
      "Throw at 9s",
      "Stand to the RIGHT SIDE of the box",
      "Insta-jump throw",
    ],
    imageSources: ["https://i.ibb.co/4Yn0vMf/9s-kj-side-of-box-JUMP-THROW.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "B Main Box",
    toTitle: "B Opposite Lane",

    notes: [],
    imageSources: ["https://i.ibb.co/m9bsCk8/Insta-jumpthrow.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "B Main Box",
    toTitle: "B Default Box",

    notes: [],
    imageSources: ["https://i.ibb.co/SxKTJMb/B-Middle.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "CT Triple Barrels",
    toTitle: "B Default Box",

    notes: ["Insta jump-throw"],
    imageSources: [
      "https://i.ibb.co/SsHtnHP/Jump-instant-throw-Hug-barrels.png",
    ],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "B Main Box",
    toTitle: "B Far Box",

    notes: [],
    imageSources: ["https://i.ibb.co/jv4YmMk/B-Box.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "B Main Box",
    toTitle: "B Opposite Lane",

    notes: ["Turret bullet touching <that thing>"],
    imageSources: ["https://i.ibb.co/fdnb4R2/image.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Main Box",
    toTitle: "A Generator",

    notes: ["Aim directly at peak of spike"],
    imageSources: ["https://i.ibb.co/Brkn86K/image.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Main Box",
    toTitle: "A Dice",

    notes: ["Aim directly at peak of spike"],
    imageSources: ["https://i.ibb.co/Brkn86K/image.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A Mid Boxes",
    toTitle: "A Dice",

    notes: ["Insta jump-throw", "Aim middle-ish of box"],
    imageSources: ["https://i.ibb.co/0FxFnJt/image.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A CT Corner",
    toTitle: "A Outside Gen",

    notes: ["Aim horizontal of yellow bar", "E vertical with this thing"],
    imageSources: ["https://i.ibb.co/DGLYn3c/image.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A CT Corner",
    toTitle: "A Generator",

    notes: ["Turret Bullet against this corner"],
    imageSources: ["https://i.ibb.co/CsHZ81x/image.png"],
  },
  {
    map: "Ascent",
    agent: "Gekko",
    util: "Mosh Pit",

    fromTitle: "A CT Corner",
    toTitle: "A Dice",

    notes: ["Turret Bullet against this corner"],
    imageSources: ["https://i.ibb.co/CsHZ81x/image.png"],
  },
];

export type FromAreaTitles = (typeof areasFrom)[number]["title"];
export type ToAreaTitles = (typeof areasTo)[number]["title"];
export type AllAreaTitles = FromAreaTitles | ToAreaTitles;
