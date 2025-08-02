type NavItem = {
  icon: React.ReactNode;
  name: string;
  url?: string;
};

type Order = {
  id: string;
  order_id: number;
  user_id: number;
  order_date: string;
  status: string;
  total_price: number;
  shipping_address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  items: {
    product_id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
};

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string | string[];
    backgroundColor: string | string[];
    fill?: boolean;
    borderDash?: number[];
    tension?: number;
    borderWidth?: number;
  }[];
};

type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  rating: number;
  reviews_count: number;
  category: string;
  image_url: string;
  description: string;
};

export type { NavItem, Order, ChartData, Product };
