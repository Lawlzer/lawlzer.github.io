import path from "path";

import type { Lineup } from "../../types";
import type { FromAreaTitles, ToAreaTitles } from "./map";

const lineups: Lineup<FromAreaTitles, ToAreaTitles>[] = [
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
export default lineups;
