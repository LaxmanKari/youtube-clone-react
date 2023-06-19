import React from "react";
import { ReactDOM } from "react-dom/client";
import { AppContext } from "../src/context/contextApi";

const App = () => {
  return (
    <AppContext>
      <div className="text-3xl">App </div>;
    </AppContext>
  );
};

export default App;
