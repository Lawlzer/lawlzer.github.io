import react, { useEffect, useState } from "react";

import Ascent from "./maps/ascent/map";
import Breeze from "./maps/breeze/map";
import { type Agent, agentUtilityMap, agents, Utility } from "./types";

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

        {map === "Ascent" && (
          <Ascent
            agent={agent}
            util={utility}
            lineupDirection={lineupDirection}
            setBottomleftImageVideoImages={setBottomleftImageVideoImages}
          />
        )}

        {map === "Breeze" && (
          <Breeze
            agent={agent}
            util={utility}
            lineupDirection={lineupDirection}
            setBottomleftImageVideoImages={setBottomleftImageVideoImages}
          />
        )}

        {/* {map === "Split" && <Split />}
        {map === "Haven" && <Haven />} */}
      </div>
    </div>
  );
}
export default App;

// <div className="w-1/2">
// {/* Render images and/or videos */}
// {true && (
//   <div>
//     <h2 className="text-xl font-bold">Images</h2>
//     {bottomleftImageVideo?.sources.map((source, index) => (
//       <img
//         key={index}
//         src={source}
//         alt={`Image ${index + 1}`}
//         className="w-full"
//       />
//     ))}
//   </div>
// )}

// {false && (
//   <div>
//     <h2 className="text-xl font-bold">Videos</h2>
//     {bottomleftImageVideo?.sources.map((source, index) => (
//       <video key={index} controls className="w-full">
//         <source src={source} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     ))}
//   </div>
// )}
// </div>
