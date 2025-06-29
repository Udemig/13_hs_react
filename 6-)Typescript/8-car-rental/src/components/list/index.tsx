import { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../utils/service";
import type { Car } from "../../types";
import Card from "./card";
import Warning from "./warning";
import Loader from "../loader";

const List: FC = () => {
  const [cars, setCars] = useState<Car[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // liste component'ı render olunca
  useEffect(() => {
    setLoading(true);

    // araç verilerini al
    fetchCars()
      .then((data) => setCars(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Warning>
        <Loader />
      </Warning>
    );

  if (error) return <Warning>Hata: {error}</Warning>;

  if (!cars || cars.length < 1)
    return <Warning>Araç verisi bulunamadı</Warning>;

  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </section>
    </div>
  );
};

export default List;
