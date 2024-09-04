import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import ConfirmationButton from "./ConfirmationButton";

const OverviewChart = () => {
  const [isDeviceOn, setIsDeviceOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsDeviceOn(prevState => !prevState);
  };

  return (
    <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 bg-white p-4 rounded-lg flex flex-col items-center justify-center shadow-md">
      <Toggle
        className="toggle-switch"
        checked={isDeviceOn}
        onChange={handleToggleSwitch}
        icons={false}
        style={{
          width: "80px",
          height: "40px",
          fontSize: "1.5rem"
        }}
      />
      <span className="mt-2 text-center">{isDeviceOn ? "Matikan Alat" : "Nyalakan Alat"}</span>

      <div className="mt-4 w-full">
        <ConfirmationButton isDeviceOn={isDeviceOn} setIsDeviceOn={setIsDeviceOn} />
      </div>
    </div>
  );
};

export default OverviewChart;
