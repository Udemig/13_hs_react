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
