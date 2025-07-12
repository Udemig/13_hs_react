import type { FC } from "react";
import { useDeletePlace, usePlaces } from "../../service";

const ListQuery: FC = () => {
  const { data, isLoading, error, refetch } = usePlaces();
  const { mutate, isPending } = useDeletePlace();

  return (
    <div>
      <h2>Query Yöntemi</h2>

      {isLoading && <p>Loading...</p>}
      {error && (
        <div>
          Error: {error.message}
          <button onClick={() => refetch()}>Tekrar Dene</button>
        </div>
      )}
      {data && (
        <ul>
          {data.map((place) => (
            <li key={place.id}>
              {place.name}

              <button disabled={isPending} onClick={() => mutate(place.id)}>
                {isPending ? "Siliniyor..." : "Sil"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListQuery;
