import Loading from "@/components/loading";
import OrderTable from "@/components/table/order-table";
import { FC, Suspense } from "react";

const Orders: FC = async () => {
  return (
    <div className="page">
      <h1 className="title">Siparişler</h1>

      <Suspense fallback={<Loading designs="my-20" />}>
        <OrderTable />
      </Suspense>
    </div>
  );
};

export default Orders;
