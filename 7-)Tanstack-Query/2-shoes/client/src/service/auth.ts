import { useNavigate } from "react-router-dom";
import type {
  LoginValues,
  MessageResponse,
  RefreshResponse,
  RegisterValues,
  UserResponse,
} from "../types";
import api from "./axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";

// auth ile atılacak bütün api istekelri
export const authService = {
  register: (data: RegisterValues) =>
    api.post<UserResponse>("/auth/register", data),
  login: (data: LoginValues) => api.post<UserResponse>("/auth/login", data),
  refresh: () => api.post<RefreshResponse>("/auth/refresh"),
  logout: () => api.post<MessageResponse>("/auth/logout"),
  me: () => api.get<UserResponse>("/auth/me"),
};

// api isteklerinin tanstack query ile tanımlayalalım
export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterValues) => authService.register(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Hesap oluşturuldu");
    },
    onError: (error) => {
      toast.error(
        "Hesap oluşturulurken bir hata oluştu " +
          (error as AxiosError<{ message: string }>).response?.data?.message
      );
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginValues) => authService.login(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Giriş yapıldı");
    },
    onError: (error) => {
      toast.error(
        "Giriş yapılırken bir hata oluştu " +
          (error as AxiosError<{ message: string }>).response?.data?.message
      );
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      navigate("/login");
      toast.success("Çıkış yapıldı");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Çıkış yapılırken bir hata oluştu");
    },
  });
};

export const useUser = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => authService.me(),
    select: (data) => data.data.user,
    retry: false,
  });

  return { isLoading, error, user: data };
};
