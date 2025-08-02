import { getOrders } from "@/utils/service";
import { FC } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import LineGraph from "../graphics/line-graph";

const SalesChart: FC = async () => {
  // api'dan sipariş verilerini al
  const orders = await getOrders();

  // tarih dizisini hazırla
  const labels = orders.map((order) =>
    new Date(order.order_date).toLocaleDateString("tr", {
      day: "2-digit",
      month: "short",
    })
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Satışlar",
        data: orders.map((product) => product.total_price),
        borderColor: "rgba(0,150,255,1)",
        backgroundColor: "rgba(0,150,255,0.5)",
        fill: true,
        borderDash: [10, 10],
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md size-full pb-16">
      <h2 className="subtitle mb-5">Satışlar</h2>

      <LineGraph data={data} />
    </div>
  );
};

export default SalesChart;
