import type { CarsResponse } from "../types";

export const fetchCars = async (): Promise<CarsResponse> => {
  const url: string = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20`;

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
