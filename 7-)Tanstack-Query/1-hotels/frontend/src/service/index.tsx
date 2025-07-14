import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  CreatePlace,
  FilterParams,
  PlaceResponse,
  PlacesResponse,
} from "../types";
import api from "./api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/*
 ! useQuery
 * useQuery hookuna api isteğinn ismini (queryKey) ve api isteğini atana fonksiyonu (queryFn) veririz
 * useQuery bizim için api isteğini atıyor ve gelen cevabın state'ini yönetiyor
 
 * isLoading, error, data gibi state'leri bizim için yönetiyor
 * * gereksiz kod tekrarının önüne geçeriz
 
 * hata durumunda 3 kez istek atılır ve 3'ününde olumsuz cevap gelirse error state'ini günceller
 * * anlık sunucu hatalarının önüne geçeriz
 
 * api dan gelen cevabı cache'de saklar
 * * aynı isteği birden fazla component'ta kullanabiliriz
 * * redux ve context gibi state yönetim araçlarına gerek kalmaz
 */

export const usePlaces = (params?: FilterParams) =>
  useQuery({
    queryKey: ["places", params], // params her değiştiğinde istek tekrar atılır
    queryFn: () => api.get<PlacesResponse>("/places", { params }),
    select: (res) => res.data.places, // data state'inin değerini belirle
    retry: 2, // hata durumunda 2 kez istek atılır
    retryDelay: 1000, // 1 saniye bekledikten sonra tekrar istek atılır
    staleTime: 1000 * 60 * 2, // cache'deki verilerin "geçerli / taze" kalma süresi
    gcTime: 1000 * 60 * 5, // cache'deki verilerin silinme süresi
  });

export const usePlace = (id: string | undefined) =>
  useQuery({
    queryKey: ["place", id],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`),
    select: (res) => res.data.place,
    enabled: Boolean(id), // id varsa istek atılır, yoksa istek atılmaz
  });

/*
 ! useMutation
 * useQuery ile sadece sayfa yüklendiği anda atıcağımız isteklerin state'İni yönetiriz. (get)
 * Ama post,put,patch,delete gibi istekleri genelde sayfa yüklendiği anda değil de bir buton tıklandığında atıyoruz.
 * Bu durumlarda useMutation hookunu kullanırız.
 
 * useMutation hookuna api isteğini atan fonksiyonu (mutationFn) veririz
 * > geriye api isteğini atmaya yarayan mutate methodunu ve
 * > api'dan gelen cevabın state'inin döndürür
 */

export const useDeletePlace = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    // api isteğini atan fonksiyonu
    mutationFn: (id: string) => api.delete(`/place/${id}`),
    // api isteği başarılı olduğunda çalışır
    onSuccess: () => {
      // arayüzden silinen elemanın gitmesi için usePlaces sorgusunu tekrar tetikle
      queryClient.invalidateQueries({ queryKey: ["places"] });

      // anasayfaya yönlendir
      navigate("/");

      // toastify ile başarı mesajı göster
      toast.success("Yer başarıyla silindi");
    },
    // api isteği başarısız olduğunda çalışır
    onError: (error) => {
      alert(error.message);
    },
  });
};

export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: CreatePlace) => api.post("/places", data),
    onSuccess: (res) => {
      toast.success("Yer başarıyla oluşturuldu");
      navigate(`/places/${res.data.place.id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
