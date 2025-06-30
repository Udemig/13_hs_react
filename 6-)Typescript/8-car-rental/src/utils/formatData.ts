import type { Car } from "../types";

const formatData = (data: Car): [string, string | number | null][] => {
  // nesne içerisinden kabul ettiğim değerleri belirle
  const accepted = [
    "make",
    "model",
    "cylinders",
    "drive",
    "fueltype",
    "trany",
    "vclass",
    "year",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  // nesneyi diziye çevir ardından filtredik
  const arr = Object.entries(data).filter((i) => accepted.includes(i[0]));

  // diziyi döndür
  return arr;
};

export default formatData;
