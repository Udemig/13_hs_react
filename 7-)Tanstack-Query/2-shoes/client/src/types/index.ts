// Auth Types
export type LoginValues = {
  email: string;
  password: string;
};

export type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
  __v: 0;
};

export type UserResponse = {
  message: string;
  user: User;
};

export type RefreshResponse = {
  accessToken: string;
};

export type MessageResponse = {
  message: string;
};

// Shoes Types
export type Shoe = {
  _id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: "women" | "men";
  price: number;
  __v: 0;
  createdAt: string;
  updatedAt: string;
};

export type ShoeFormData = {
  name: string;
  price: number;
  discount: number;
  color: string;
  size: string;
  description: string;
  isNew: boolean;
  gender: "women" | "men";
};
