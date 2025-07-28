import { getOrders } from "@/utils/service";
import { FC } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import LineGraph from "../graphics/line-graph";

// TODO: apı'dan gelen veriye göre grafik oluşturulacak.
const SalesChart: FC = async () => {
  const orders = await getOrders();

  const labels = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs"];

  const data = {
    labels,
    datasets: [
      {
        label: "Satışlar",
        data: [1000, 2500, 200, 1200, 1500],
        borderColor: "rgba(0,150,255,1)",
        backgroundColor: "rgba(0,150,255,0.5)",
        fill: true,
        borderDash: [10, 10],
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md">
      <h2 className="subtitle mb-5">Satışlar</h2>

      <LineGraph data={data} />
    </div>
  );
};

export default SalesChart;
