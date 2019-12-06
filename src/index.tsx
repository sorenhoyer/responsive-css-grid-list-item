import React from "react";
import { render } from "react-dom";
import AlertListItem from "./components/AlertListItem/AlertListItem";

import "./styles.css";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <AlertListItem />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
