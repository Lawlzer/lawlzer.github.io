import react, { useEffect } from "react";
import Ascent from "./maps/ascent";

// Agent
// Util
// Map
// From
// To

// edit SVG, get click from SVG

function App() {
  return (
    <div className="flex items-center justify-center relative w-screen h-screen max-w-full">
      <div className="absolute bg-gray-700 border-[15px] border-black p-20 rounded-full flex items-center justify-center">
        <Ascent />
      </div>
    </div>
  );
}

export default App;
