import React, { useCallback, useState } from "react";
import Speedometer from "react-d3-speedometer";

const COLORS = ["#db2777", "#e4e4e7", "#9333ea"];

const CustomersChart = () => {
  const [value, setValue] = useState(250); // Example value, adjust as needed

  return (
    <div className="h-[20rem] w-80 bg-white p-4 rounded-lg flex flex-col">
      <div className="flex flex-col">
        <strong className="text-gray-700 font-medium">SUHU</strong>
        <span className="text-gray-300 text-xs font-semibold">
          Suhu alat selama Proses
        </span>
      </div>

      <div className="w-full mt-4">
        <Speedometer
          value={value}
          minValue={0}
          maxValue={500} // Adjust max value as needed
          needleColor="steelblue"
          startColor="#30b32d"
          segments={10} // Number of segments on the speedometer
          endColor="#FFD700"
          textColor="#d8dee9"
          ringWidth={20} // Width of the speedometer ring
          needleTransitionDuration={4000} // Animation duration for needle movement
          currentValueText="Current Value: ${value}"
        />
      </div>
    </div>
  );
};

export default CustomersChart;
