"use client";

import { FC } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ChartData } from "@/types";

interface Props {
  data: ChartData;
}

const LineGraph: FC<Props> = ({ data }) => {
  return <Line data={data} />;
};

export default LineGraph;
