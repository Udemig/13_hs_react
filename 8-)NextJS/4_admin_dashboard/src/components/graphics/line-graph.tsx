"use client";

import { FC } from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from "@/types";
import "chart.js/auto";

interface Props {
  data: ChartData;
}

const LineGraph: FC<Props> = ({ data }) => {
  return <Line data={data} options={{}} />;
};

export default LineGraph;
