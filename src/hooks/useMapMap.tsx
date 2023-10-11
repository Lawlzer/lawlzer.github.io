import Ascent from "../maps/ascent/map";
import * as ascentLineups from "../maps/ascent/lineups";
import Bind from "../maps/bind/map";
import * as bindLineups from "../maps/bind/lineups";
import Breeze from "../maps/breeze/map";
import * as breezeLineups from "../maps/breeze/lineups";

import Todo from "../maps/todo/map";
// import Breeze from "../maps/breeze/map";

export const useMapMap = (newBuildTo: any, newBuildFrom: any) => {
  const map: { [key: string]: any } = {
    Ascent: {
      svg: <Ascent newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
      ...ascentLineups,
    },
    // Breeze: <Breeze newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
    Bind: {
      svg: <Bind newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
      ...bindLineups,
    },
    Breeze: {
      svg: <Breeze newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
      ...breezeLineups,
    },

    Fracture: {
      svg: <Todo />,
      lineups: [],
      areasFrom: [],
      areasTo: [],
    },
    Haven: {
      svg: <Todo />,
      lineups: [],
      areasFrom: [],
      areasTo: [],
    },
    Icebox: {
      svg: <Todo />,
      lineups: [],
      areasFrom: [],
      areasTo: [],
    },
    Lotus: {
      svg: <Todo />,
      lineups: [],
      areasFrom: [],
      areasTo: [],
    },
    Pearl: {
      svg: <Todo />,
      lineups: [],
      areasFrom: [],
      areasTo: [],
    },
    Split: {
      svg: <Todo />,
      lineups: [],
      areasFrom: [],
      areasTo: [],
    },
    Sunset: {
      svg: <Todo />,
      lineups: [],
      areasFrom: [],
      areasTo: [],
    },
  };

  return map;
};
