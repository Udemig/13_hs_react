import type { Car } from "../types";

const getImage = (car: Car, angle?: string, surrounding?: boolean): string => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("modelYear", car.year.toString());
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("randomPaint", "true");
  url.searchParams.append("angle", angle || "23");

  if (surrounding) {
    url.searchParams.append("surrounding", "sur3");
    url.searchParams.append("viewPoint", "1");
    url.searchParams.append("aspectRatio", "16:10");
    url.searchParams.append("overlayArea", "none");
  }

  return url.href;
};

export default getImage;
