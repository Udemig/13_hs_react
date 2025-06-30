import type { CarsResponse } from "../types";

export const fetchCars = async (
  make: string,
  model: string,
  year: string
): Promise<CarsResponse> => {
  let url: string = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?`;

  if (make) {
    url += `refine=make:"${make}"`;
  }

  if (model) {
    url += `&refine=model:"${model}"`;
  }

  if (year) {
    url += `&refine=year:"${year}"`;
  }

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
