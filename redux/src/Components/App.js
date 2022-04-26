import React, { useState } from "react";
import "./App.css";
import AddNumberRoot from "./AddNumberRoot";
import DisplayNumberRoot from "./DisplayNumberRoot";
import Info from "./Info";
import Profile from "./Profile";
function App(props) {
  const [number, setnumber] = useState(0);

  return (
    <div>
      <h1>Root</h1>
      <div className="flex_box">
        <AddNumberRoot
          onClick={function (size) {
            setnumber(number + size);
          }}
        />
        <DisplayNumberRoot />
      </div>
      <Info location="korea" />
      <Profile username="Jihu Park" name="(박지후)" />
    </div>
  );
}

export default App;
