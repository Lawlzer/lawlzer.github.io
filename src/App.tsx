import react, { useEffect } from "react";
import Ascent from "./maps/ascent/map";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

// edit SVG, get click from SVG

function App() {
  const [opened, setOpened] = react.useState(false);

  return (
    <div className="flex items-stretch w-screen h-screen max-w-full bg-gray-800 overflow-hidden">
      <div className="w-[35%] bg-white text-opacity-0 flex flex-col">
        <div className="w-full flex-1 bg-pink-500">
          <img
            key={"hi"}
            src="https://i.ibb.co/BVG5v80/image.png" //todo
            alt="Image Alt Text" // Add alt text for accessibility
          ></img>
        </div>
        <div className="w-full flex-1 bg-red-500"></div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Ascent />
      </div>
    </div>
  );
}

export default App;
