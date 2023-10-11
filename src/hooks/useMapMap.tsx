import Ascent from "../maps/ascent/map";
import Todo from "../maps/todo/map";
import {
  lineups as ascentLineups,
  areasFrom as ascentAreasFrom,
  areasTo as ascentAreasTo,
} from "../maps/ascent/lineups";
// import Breeze from "../maps/breeze/map";

export const useMapMap = (newBuildTo: any, newBuildFrom: any) => {
  const map: { [key: string]: any } = {
    Ascent: {
      svg: <Ascent newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
      lineups: ascentLineups,
      areasFrom: ascentAreasFrom,
      areasTo: ascentAreasTo,
    },
    // Breeze: <Breeze newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
    Bind: {
      svg: <Todo />,
      lineups: [],
      areasFrom: [],
      areasTo: [],
    },
    Breeze: {
      svg: <Todo />,
      lineups: [],
      areasFrom: [],
      areasTo: [],
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
