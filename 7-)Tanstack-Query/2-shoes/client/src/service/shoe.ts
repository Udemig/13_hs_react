import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Shoe, ShoeFormData } from "../types";
import api from "./axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const shoeService = {
  getAll: () => api.get<Shoe[]>("/shoes"),
  getOne: (id: string) => api.get<Shoe>(`/shoes/${id}`),
  create: (data: ShoeFormData) => api.post<Shoe>("/shoes", data),
  update: (id: string, data: ShoeFormData) =>
    api.put<Shoe>(`/shoes/${id}`, data),
  delete: (id: string) => api.delete(`/shoes/${id}`),
};

const useShoes = () =>
  useQuery({
    queryKey: ["shoes"],
    queryFn: () => shoeService.getAll(),
    select: (res) => res.data,
  });

const useShoe = (id: string) =>
  useQuery({
    queryKey: ["shoe"],
    queryFn: () => shoeService.getOne(id),
    select: (res) => res.data,
  });

const useDeleteMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => shoeService.delete(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["shoes"] });
      toast.success("Ürün başarıyla silindi");
    },
    onError: (error) => {
      toast.error("Bir hata oluştu");
    },
  });
};

const useCreateMutation = () => {
  const client = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: ShoeFormData) => shoeService.create(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/dashboard");
      toast.success("Ürün başarıyla eklendi");
    },
    onError: (error) => {
      toast.error("Bir hata oluştu");
    },
  });
};

const useUpdateMutation = () => {
  const client = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ShoeFormData }) =>
      shoeService.update(id, data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["shoes"] });
      navigate("/dashboard");
      toast.success("Ürün başarıyla güncellendi");
    },
    onError: (error) => {
      toast.error("Bir hata oluştu");
    },
  });
};

export {
  shoeService,
  useShoes,
  useShoe,
  useDeleteMutation,
  useCreateMutation,
  useUpdateMutation,
};
