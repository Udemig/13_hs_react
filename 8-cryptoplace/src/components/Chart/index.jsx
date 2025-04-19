import React from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const data = [
    ["Date", "Prices"],
    ...historicalData.map((item) => {
      // Veri içerisinde bulunan ms'yi tarihe çevir
      const date = new Date(item.timestamp);
      // Tarihi formatla
      const time = date.toLocaleDateString("tr", {
        day: "2-digit",
        month: "2-digit",
      });

      // Chart için gereken fiyat ve tarih değerini return et
      return [time, Number(item.price)];
    }),
  ];
  return <Chart chartType="LineChart" data={data} height="100%" />;
};

export default LineChart;
