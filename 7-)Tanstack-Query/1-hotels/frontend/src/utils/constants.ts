export const SORT_OPTIONS = [
  {
    label: "En ucuz",
    value: "price-asc",
  },
  {
    label: "En pahalı",
    value: "price-desc",
  },
  {
    label: "En yüksek puanlı",
    value: "rating-desc",
  },
  {
    label: "En düşük puanlı",
    value: "rating-asc",
  },
];

export const INITIAL_VALUES = {
  name: "",
  description: "",
  address: "",
  location: "",
  price_per_night: 0,
  rating: 0,
  amenities: "",
  availability: false,
};

export const INPUT_FIELDS = [
  {
    label: "Adı",
    name: "name",
    placeholder: "Seaside Villa",
  },
  {
    label: "Konum",
    name: "location",
    placeholder: "Ankara",
  },
  {
    label: "Adres",
    name: "address",
    placeholder: "123 Main St, Anytown",
  },
  {
    label: "Açıklama",
    name: "description",
    placeholder: "Güzel bir villa",
  },
  {
    label: "Hizmetler",
    name: "amenities",
    placeholder: "Wi-Fi, TV, Klima",
  },
  {
    label: "Puan",
    name: "rating",
    placeholder: "4.5",
  },
  {
    label: "Fiyat",
    name: "price_per_night",
    placeholder: "100",
  },
  {
    label: "Müsaitlik (Boş oda var mı?)",
    name: "availability",
    type: "checkbox",
  },
];
