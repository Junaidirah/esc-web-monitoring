import React, { useState } from "react";
import { Dropdown } from 'flowbite-react'
import {ResponsiveContainer, BarChart, Cell, Bar, XAxis, CartesianGrid, Tooltip } from "recharts";



const data = [
  
  {
    name: "Jan",
    amt: 1800,
  },
  {
    name: "Feb",
    amt: 1210,
  },
  {
    name: "Mar",
    amt: 2290,
  },
  {
    name: "Apr",
    amt: 2000,
  },
  {
    name: "May",
    amt: 2181,
  },
  {
    name: "Jun",
    amt: 800,
  },
  {
    name: "Jul",
    amt: 2200,
  },
  {
    name: "Aug",
    amt: 2400,
  },
  {
    name: "Sep",
    amt: 2300,
  },
  {
    name: "Oct",
    amt: 2050,
  },
  {
    name: "Nov",
    amt: 1900,
  },
  {
    name: "Dec",
    amt: 2150,
  },
];

const OverviewChart = () => {
  const [focusBar, setFocusBar] = useState(null);
  const [mouseLeave, setMouseLeave] = useState(true);
  
  // Fungsi untuk menampilkan pesan konfirmasi saat tombol biru diklik
  const handleBlueButtonClick = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menghidupkan?");
    if (isConfirmed) {
      console.log("Alat dinyalakan.");
    } else {
      console.log("Pengguna membatalkan.");
    }
  };
  
  // Fungsi untuk menampilkan pesan konfirmasi saat tombol merah diklik
  const handleRedButtonClick = () => {
    const isConfirmed = window.confirm("Apakah Anda yakin ingin mematikan?");
    if (isConfirmed) {
      console.log("Alat dimatikan.");
    } else {
      console.log("Pengguna membatalkan.");
    }
  };
  
  return (
    <div className="h-[20rem] w-2/3 bg-white p-4 rounded-lg flex flex-col grow ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <strong className="text-gray-700 font-medium">Overview</strong>
          <span className="text-gray-300 text-xs font-semibold">Monthly Earning</span>
        </div>

        <div className="flex gap-0.5 bg-indigo-50 text-gray-400 items-center font-semibold p-1 mb-2 rounded-md text-xs">
          <Dropdown label='Quarterly' inline className="bg-indigo-50">
            <Dropdown.Item>Monthly</Dropdown.Item>
            <Dropdown.Item>Annual</Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={750}
            height={300}
            data={data}
            margin={{ top: 0, right: 5, left: 5, bottom: 30 }}
            onMouseMove={(state) => {
              if (state.isTooltipActive) {
                setFocusBar(state.activeTooltipIndex);
                setMouseLeave(false);
              } else {
                setFocusBar(null);
                setMouseLeave(true);
              }
            }}
          >
            <CartesianGrid
              strokeDasharray="0 0 0 0"
              vertical={false}
              horizontal={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              fontWeight="bold"
              tickMargin={10}
              tickLine={false}
            />
            <Tooltip cursor={false} />
            <Bar dataKey="amt" fill="#e0e7ff" radius={[10, 10, 10, 10]}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    focusBar === index || mouseLeave
                      ? "#4f46e5"
                      : "#eef2ff"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between">
        {/* Tombol biru dengan penanganan klik */}
        <button
          type="button"
          className="flex-1 px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
          onClick={handleBlueButtonClick} // Menggunakan fungsi handleBlueButtonClick saat tombol diklik
        >
          Nyalakan alat
        </button>

        {/* Tombol merah dengan penanganan klik */}
        <button
          type="button"
          className="flex-1 px-6 py-3.5 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-2"
          onClick={handleRedButtonClick} // Menggunakan fungsi handleRedButtonClick saat tombol diklik
        >
          Matikan alat
        </button>
      </div>
    </div>
  );
};

export default OverviewChart;
