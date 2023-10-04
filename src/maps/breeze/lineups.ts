import path from "path";

import type { Lineup } from "../../types";
import type { FromAreaTitles, ToAreaTitles } from "./map";

const lineups: Lineup<FromAreaTitles, ToAreaTitles>[] = [
  {
    map: "Breeze",
    agent: "Sova",
    util: "Recon Dart",

    fromTitle: "Mid Spawn Corner",
    toTitle: "A ?? Recon Close",

    notes: ["2 Charges", "0 Bounces", "Aim between the leaf and wire"],
    imageSources: ["https://i.ibb.co/S0xRZks/image.png"],
  },
  {
    map: "Breeze",
    agent: "Sova",
    util: "Shock Dart",

    fromTitle: "A Mid Doors",
    toTitle: "A Default Plant",

    notes: ["3 Charges, 2 bounces", "1 Charge, 1 Bounce"],
    imageSources: [
      "https://i.ibb.co/RNysxCk/image.png",
      "https://i.ibb.co/cXPPn6D/image.png",
    ],
  },
];
export default lineups;
