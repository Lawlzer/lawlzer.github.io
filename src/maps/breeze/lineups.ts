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
    title: "Mid Spawn Door Corner",
    x: 411,
    y: 604,
    width: 15,
    height: 15,
  },
  {
    title: "A Mid Doors",
    x: 502,
    y: 380,
    width: 16,
    height: 16,
  },
] as const; // Ideally we would ensure this satisfies MapArea[] but that is extremely hard to do

export const areasTo = [
  {
    title: "B Default Plant",
    x: 85,
    y: 235,
    width: 16,
    height: 16,
  },
  {
    title: "A ?? Recon Close",
    x: 746,
    y: 407,
    width: 16,
    height: 16,
  },
  {
    title: "A ?? Recon Deep",
    x: 742,
    y: 306,
    width: 16,
    height: 16,
  },
  {
    title: "A Default Plant",
    x: 710,
    y: 390,
    width: 20,
    height: 20,
  },
] as const; // Ideally we would ensure this satisfies MapArea[] but that is extremely hard to do

export const lineups: Lineup<FromAreaTitles, ToAreaTitles>[] = [
  {
    agent: "Sova",
    util: "Recon Dart",

    fromTitle: "Mid Spawn Door Corner",
    toTitle: "A ?? Recon Close",

    imageStuff: [
      {
        image: image1,
        notes: ["2 Charges", "0 Bounces", "Aim between the leaf and wire"],
      },
    ],
  },
  {
    agent: "Sova",
    util: "Shock Dart",

    fromTitle: "A Mid Doors",
    toTitle: "A Default Plant",

    imageStuff: [
      { image: image2, notes: ["3 Charges", "2 Bounces"] },
      { image: image3, notes: ["1 Charge", "1 Bounce", "No delay."] },
    ],
  },
];

export type FromAreaTitles = (typeof areasFrom)[number]["title"];
export type ToAreaTitles = (typeof areasTo)[number]["title"];
export type AllAreaTitles = FromAreaTitles | ToAreaTitles;
