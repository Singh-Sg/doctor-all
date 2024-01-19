import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b1ddf1"],
  ["Silver", 10.49, "#b1ddf1"],
  ["Gold", 19.3, "#b1ddf1"],
  ["Platinum", 21.45, "color: #b1ddf1"],
];

export default function ColumnChart() {
  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data}/>
  );
}
