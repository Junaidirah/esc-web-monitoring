import React from "react";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import Speedometer from "react-d3-speedometer";

const DashboardStartsGrid = () => {
  const items = [
    {
      title: "Pakan ikan",
      value: 198,
      needleColor: "#30b32d",
      startColor: "#30b32d",
      endColor: "#FFD700",
      currentValueText: "$198k",
      trend: { value: 37.8, direction: "up" }
    },
    {
      title: "Temperatur",
      value: 24,
      needleColor: "#7b3d82",
      startColor: "#7b3d82",
      endColor: "#9b82e0",
      currentValueText: "$2.4k",
      trend: { value: 2, direction: "down" }
    },
    {
      title: "Pompa",
      value: 24,
      needleColor: "#38b2ac",
      startColor: "#38b2ac",
      endColor: "#81e6d9",
      currentValueText: "$2.4k",
      trend: { value: 2, direction: "down" }
    },
    {
      title: "PH Air",
      value: 89,
      needleColor: "#ed64a6",
      startColor: "#ed64a6",
      endColor: "#f687b3",
      currentValueText: "$89k",
      trend: { value: 11, direction: "up" }
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <BoxWrapper key={index}>
          <DashboardItem {...item} />
        </BoxWrapper>
      ))}
    </div>
  );
};

const BoxWrapper = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col items-center shadow-md w-full">
      {children}
    </div>
  );
};

const DashboardItem = ({
  title,
  value,
  needleColor,
  startColor,
  endColor,
  currentValueText,
  trend,
}) => {
  const TrendIcon = trend.direction === "up" ? BiUpArrowAlt : BiDownArrowAlt;
  const trendColor = trend.direction === "up" ? "text-green-600" : "text-red-600";

  return (
    <>
      <div className="flex flex-col items-start w-full">
        <strong className="text-gray-700 font-medium">{title}</strong>
        <span className="text-gray-300 text-xs font-semibold mt-1">{title} selama Proses</span>
      </div>

      <div className="flex justify-center w-full mt-4">
        <div className="w-full max-w-full">
          <Speedometer
            value={value}
            minValue={0}
            maxValue={500}
            needleColor={needleColor}
            startColor={startColor}
            endColor={endColor}
            segments={10}
            textColor="#d8dee9"
            ringWidth={15}
            needleTransitionDuration={4000}
            currentValueText={currentValueText}
            width={300} // Setting a responsive width
            height={200} // Setting a responsive height
          />
        </div>
      </div>

      <div className={`text-xs font-medium ${trendColor} mt-2 flex items-center`}>
        <TrendIcon className="inline text-base mr-1" />
        {trend.value}% this {trend.direction === "up" ? "month" : "week"}
      </div>
    </>
  );
};

export default DashboardStartsGrid;
