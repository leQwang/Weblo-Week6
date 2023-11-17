import React from "react";
import "./index.css";
import Frame1 from "./layouts/Frame1";
import Frame2 from "./layouts/Frame2";
import Frame3 from "./layouts/Frame3";
import Frame4 from "./layouts/Frame4";
import Frame5 from "./layouts/Frame5";
import Frame6 from "./layouts/Frame6";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Frame1 />
      <div className="bg-[#271649]">
        <Frame2 />
        <Frame3 />
      </div>
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

export default App;
