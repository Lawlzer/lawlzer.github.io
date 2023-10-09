import Ascent from "../maps/ascent/map";
// import Breeze from "../maps/breeze/map";

export const useMapMap = (newBuildTo: any, newBuildFrom: any) => {
  const map: { [key: string]: any } = {
    Ascent: <Ascent newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
    // Breeze: <Breeze newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
  };

  return map;
};
