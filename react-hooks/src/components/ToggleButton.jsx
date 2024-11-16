import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div>
        <h2>{isOn ? "The button is ON" : "The button is OFF"}</h2>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
      </div>
    </>
  );
};

export default ToggleButton;
