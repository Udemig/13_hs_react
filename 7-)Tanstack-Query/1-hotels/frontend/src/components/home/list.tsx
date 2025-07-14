import type { FC } from "react";
import { usePlaces } from "../../service";
import Loading from "../loading";
import Error from "../error";
import Card from "../card";
import { useSearchParams } from "react-router-dom";
import type { FilterParams } from "../../types";

const List: FC = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const { data, isLoading, error, refetch } = usePlaces(params as FilterParams);

  if (isLoading) return <Loading />;

  if (error) return <Error info={error.message} refetch={refetch} />;

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl mb-5">Yakınınızdaki Lokasyonlar</h1>

      <div className="grid gap-5 mt-5">
        {!data || data?.length === 0 ? (
          <div>
            <p>Aradığınız kriterlere uygun lokasyon bulunamadı.</p>
          </div>
        ) : (
          data.map((item) => <Card key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default List;
