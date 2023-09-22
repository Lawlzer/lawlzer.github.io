export interface MapArea {
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;

  selected?: boolean;
}

type Agent = "Gekko";

export interface Lineup {
  map: string;
  agent: Agent;
  util: string;

  fromTitle: string;
  toTitle: string;

  notes: string[];
  imageLinks: string[];
}
