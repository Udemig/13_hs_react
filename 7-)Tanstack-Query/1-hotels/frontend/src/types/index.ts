interface Place {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
}

interface PlaceResponse {
  message: string;
  results: number;
  places: Place[];
}

export type { Place, PlaceResponse };
