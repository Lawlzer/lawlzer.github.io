import react, { useEffect, useState } from "react";

import Ascent from "./maps/ascent/map";
import Breeze from "./maps/breeze/map";

import {
  type Agent,
  agentUtilityMap,
  agents,
  Utility,
  MapArea,
  Lineup,
  imageMap,
} from "./types";
import {
  FromAreaTitles,
  ToAreaTitles,
  areasFrom,
  areasTo,
} from "./maps/ascent/lineups";
import { lineups } from "./maps/ascent/lineups";
import { useMapMap } from "./hooks/useMapMap";

const maps = [
  "Ascent",
  "Bind",
  "Breeze",
  "Fracture",
  "Haven",
  "Icebox",
  "Lotus",
  "Pearl",
  "Split",
  "Sunset",
];
function CustomButton({
  mapName,
  isSelected,
  onClick,
}: {
  mapName: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${
        isSelected
          ? "bg-blue-500 hover:bg-blue-500 text-white border-blue-500"
          : " text-white border-white"
      } px-4 py-2 rounded-md transition-colors duration-300 font-medium border-2`}
      onClick={onClick}
    >
      {mapName}
    </button>
  );
}

export type BottomleftImageVideo = {
  notes: string[];
  sources: string[];
} | null;

export type LineupDirection = "destinationToStart" | "startToDestination";
function App() {
  const [map, setMap] = useState("Ascent");
  const [agent, setAgent] = useState<Agent>("Gekko");
  const [utility, setUtility] = useState<Utility>("Mosh Pit");
  const [lineupDirection, setLineupDirection] =
    useState<LineupDirection>("startToDestination");

  const [bottomleftImageVideo, setBottomleftImageVideoImages] =
    useState<BottomleftImageVideo>();

  const [fullscreen, setFullscreen] = useState<string>();

  const [primaryTo, setPrimaryTo] = useState<MapArea<ToAreaTitles> | null>(
    null
  );
  const [primaryFrom, setPrimaryFrom] =
    useState<MapArea<FromAreaTitles> | null>(null);

  const mapMap = useMapMap(newBuildTo, newBuildFrom);
  function getAreaOpacity(thisArea: MapArea<string>): number {
    const areaIsUsedInLineup = lineups.some((lineup) => {
      if (
        lineup.agent === agent &&
        lineup.util === utility &&
        (lineup.fromTitle === thisArea.title ||
          lineup.toTitle === thisArea.title)
      ) {
        return true;
      }
      return false;
    });
    if (!areaIsUsedInLineup) return 0;

    const isPrimaryArea =
      primaryTo?.title === thisArea.title ||
      primaryFrom?.title === thisArea.title;
    if (isPrimaryArea) return 1;

    const areaIsFrom = areasFrom.some((area) => area.title === thisArea.title);
    const areaIsTo = areasTo.some((area) => area.title === thisArea.title);

    if (
      areaIsTo &&
      primaryFrom &&
      !primaryTo &&
      lineupDirection === "startToDestination"
    ) {
      const usedInLineup = lineups.some((lineup) => {
        if (
          primaryFrom.title === lineup.fromTitle &&
          lineup.toTitle === thisArea.title
        ) {
          return true;
        }
        return false;
      });
      if (usedInLineup) return 0.5;
    }

    if (
      areaIsFrom &&
      primaryTo &&
      !primaryFrom &&
      lineupDirection === "destinationToStart"
    ) {
      const usedInLineup = lineups.some((lineup) => {
        if (
          primaryTo.title === lineup.toTitle &&
          lineup.fromTitle === thisArea.title
        ) {
          return true;
        }
        return false;
      });
      if (usedInLineup) return 0.5;
    }

    if (!primaryTo && !primaryFrom) {
      if (lineupDirection === "destinationToStart" && areaIsTo) return 0.5;
      if (lineupDirection === "startToDestination" && areaIsFrom) return 0.5;
    }
    return 0;
  }

  function newBuildFrom(): React.ReactNode {
    return areasFrom.map((areaFrom) => {
      return (
        <>
          <image
            key={"from " + areaFrom.title}
            className="cursor-pointer duration-1000"
            x={areaFrom.x - 6} // todo fix
            y={areaFrom.y - 6}
            width={areaFrom.width + 12}
            height={areaFrom.height + 12}
            opacity={getAreaOpacity(areaFrom)}
            pointerEvents={getAreaOpacity(areaFrom) === 0 ? "none" : "auto"}
            href={imageMap[agent]}
            onClick={() => {
              const alreadyActive = areaFrom.title === primaryFrom?.title;
              if (alreadyActive) {
                setPrimaryFrom(null);
                setBottomleftImageVideoImages(null);

                if (lineupDirection === "startToDestination" && primaryFrom)
                  setPrimaryTo(null);

                return;
              }

              setPrimaryFrom(areaFrom);

              const currentLineup = getCurrentLineup({
                newAreaFrom: areaFrom,
              });
              if (!currentLineup) return;

              setBottomleftImageVideoImages({
                notes: currentLineup.notes,
                sources: currentLineup.imageSources,
              });
            }}
          ></image>
        </>
      );
    });
  }

  function newBuildTo(): React.ReactNode {
    return areasTo.map((areaTo) => {
      return (
        <>
          <image
            key={"to " + areaTo.title}
            className="cursor-pointer duration-1000"
            x={areaTo.x - 10}
            y={areaTo.y - 10}
            width={areaTo.width + 20}
            height={areaTo.height + 20}
            opacity={getAreaOpacity(areaTo)}
            pointerEvents={getAreaOpacity(areaTo) === 0 ? "none" : "auto"}
            href={imageMap[utility]}
            onClick={() => {
              const alreadyActive = areaTo.title === primaryTo?.title;
              if (alreadyActive) {
                setPrimaryTo(null);
                setBottomleftImageVideoImages(null);

                if (lineupDirection === "destinationToStart" && primaryTo)
                  setPrimaryFrom(null);

                return;
              }

              setPrimaryTo(areaTo);

              const currentLineup = getCurrentLineup({ newAreaTo: areaTo });
              if (!currentLineup) return;

              setBottomleftImageVideoImages({
                notes: currentLineup.notes,
                sources: currentLineup.imageSources,
              });
            }}
          ></image>
        </>
      );
    });
  }

  function getCurrentLineup({
    newAreaTo,
    newAreaFrom,
  }: {
    newAreaTo?: MapArea<ToAreaTitles>;
    newAreaFrom?: MapArea<FromAreaTitles>;
  }): Lineup<FromAreaTitles, ToAreaTitles> | null {
    const lineup = lineups.find(
      (lineup) =>
        lineup.fromTitle === (newAreaFrom?.title ?? primaryFrom?.title) &&
        lineup.toTitle === (newAreaTo?.title ?? primaryTo?.title)
    );
    return lineup ?? null;
  }

  return (
    <div className="flex items-stretch w-screen h-screen max-w-full bg-gray-800">
      {fullscreen && (
        <div
          className="w-screen h-screen absolute top-0 left-0 cursor-pointer flex"
          onClick={() => setFullscreen(undefined)}
        >
          <img src={fullscreen} className="w-full h-full p-10 absolute z-10" />
          <div className="w-full h-full bg-black opacity-80 absolute z-0"></div>
        </div>
      )}
      <div className="w-[30%] text-opacity-0 flex flex-col items-stretch">
        {/* Maps */}
        <div className="align-middle p-auto flex justify-center w-full flex-wrap px-5">
          {maps.map((thisMap, index, original) => (
            <div className={`${index < original.length - 1 && "mr-3"} mt-3`}>
              <CustomButton
                mapName={thisMap}
                isSelected={thisMap === map}
                onClick={() => setMap(thisMap)}
              />
            </div>
          ))}
        </div>

        {/* Agents */}
        <div className="align-middle p-auto flex justify-center items-center mt-3">
          {agents.map((agentName, index, original) => {
            return (
              <div className={`${index < original.length - 1 && "mr-3"}`}>
                <CustomButton
                  mapName={agentName}
                  isSelected={agentName === agent}
                  onClick={() => {
                    setAgent(agentName);
                    setUtility(agentUtilityMap[agentName][0]);
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Utilities */}
        <div className="align-middle flex justify-center mt-3">
          {agentUtilityMap[agent].map((localUtility, index, original) => {
            return (
              <div className={`${index < original.length - 1 && "mr-3"}`}>
                <CustomButton
                  mapName={localUtility}
                  isSelected={localUtility === utility}
                  onClick={() => {
                    setUtility(localUtility);
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Lineup Direction */}
        <div className="align-middle flex justify-center mt-3">
          <div className="">
            <CustomButton
              mapName={"Start -> Destination"}
              isSelected={lineupDirection === "startToDestination"}
              onClick={() => setLineupDirection("startToDestination")}
            />
          </div>
          <div className="">
            <CustomButton
              mapName={"Destination -> Start"}
              isSelected={lineupDirection === "destinationToStart"}
              onClick={() => setLineupDirection("destinationToStart")}
            />
          </div>
        </div>

        {/* Image/video sources */}
        <div className="mt-3">
          {bottomleftImageVideo?.sources.map((sourceUrl, index) => (
            <>
              <div className="text-xl font-bold mr-3"></div>
              <img
                src={sourceUrl}
                alt={`Image ${index + 1}`}
                className="cursor-pointer"
                onClick={() => setFullscreen(sourceUrl)}
              />
              {/* <div className="text-xl font-bold"></div>
              <img src={sourceUrl} alt={`Image ${index + 1}`} className="" /> */}
            </>
          ))}
        </div>

        {/* Image/video notes */}
        <div className="w-full px-4 py-0 mt-0 flex-1">
          {/* <div className="text-xl font-bold text-center text-white">
            {bottomleftImageVideo?.notes?.length ? "Notes" : ""}
          </div> */}
          <div className="">
            {bottomleftImageVideo?.notes.map((note, index, original) => (
              <div
                key={index}
                className={`${
                  index !== original.length - 1
                } text-white text-center`}
              >
                • {note}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        {/* Render the selected map */}

        {/* {map === "Ascent" && (
          <Ascent newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />
        )} */}
        {/* {<Ascent newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />} */}
        {mapMap[map]}
      </div>
    </div>
  );
}
export default App;
