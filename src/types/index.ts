export interface MapArea<Titles extends String> {
  title: Titles;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Lineup<FromAreaTitles, ToAreaTitles> {
  map: string;
  agent: Agent;
  util: string;

  fromTitle: FromAreaTitles;
  toTitle: ToAreaTitles;

  notes: string[];
  imageSources: [] | [string, string] | [string];
}

export const imageMap = {
  Gekko: "https://i.ibb.co/PjrxpnH/image.png",
  Sova: "https://i.ibb.co/x33m7sW/Valorant-Sova-Guide-fotor-bg-remover-20230927223544.png",
  "Mosh Pit": "https://i.ibb.co/LpJSDr1/moshPit.png",
  "Shock Dart": "https://i.ibb.co/GcVMqj2/Screenshot-5-modified.png",
  "Recon Dart": "https://i.ibb.co/GcVMqj2/Screenshot-5-modified.png", // https://i.ibb.co/5kpdtr1/mediamodifier-cropped-image.png
} as const;

export const agentUtilityMap = {
  Gekko: ["Mosh Pit"],
  Sova: ["Shock Dart", "Recon Dart"],
} as const;
export const agents = Object.keys(agentUtilityMap) as Agent[];

export type Agent = keyof typeof agentUtilityMap;
export type Utility = (typeof agentUtilityMap)[Agent][number];
