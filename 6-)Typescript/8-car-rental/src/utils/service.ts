import type { CarsResponse } from "../types";

export const fetchCars = async (
  make: string,
  model: string,
  year: string,
  page: string //
): Promise<CarsResponse> => {
  let url: string = `${import.meta.env.VITE_API_URL}/explore/v2.1/catalog/datasets/all-vehicles-model/records?`;

  if (make) {
    url += `refine=make:"${make}"`;
  }

  if (model) {
    url += `&refine=model:"${model}"`;
  }

  if (year) {
    url += `&refine=year:"${year}"`;
  }

  // page  :   1     2     3      4
  // limit :   10    10    10     10
  // offset:   0     10    20     30
  const limit = 9;
  const offset = (Number(page) - 1) * limit;

  url += `&limit=${limit}`;
  url += `&offset=${offset}`;

  const res = await fetch(url);

  const data = await res.json();

  return data;
};
