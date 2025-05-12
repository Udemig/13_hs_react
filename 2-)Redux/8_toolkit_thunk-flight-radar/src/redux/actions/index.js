import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { params } from "../../utils/constants";

// tr üzerindeki uçuşları alan asenkron aksiyon
const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // api isteğini at
  const res = await api.get("/list-in-boundary", { params });

  // api'dan gelen veriyi formatla
  // dizi içerisindeki dizileri nesneler çeviricez
  // [[],[],[],[]]     =>          [{},{},{},{}]
  const formatted = res.data.aircraft.map((i) => ({
    flightid: i[0],
    callsign: i[1],
    lat: i[2],
    lon: i[3],
    track: i[4],
  }));

  // aksiyonun payload'ı
  return formatted;
});

// bir uçuşun detay verilerini alan asenkron aksiyon
const getDetails = createAsyncThunk("details/getDetails", async (flightId) => {
  // parametreleri ayarla
  const params = {
    flight: flightId,
  };

  // api isteğini
  const res = await api.get("/detail", { params });

  // aksiyonun payload'I
  return res.data;
});

export { getFlights, getDetails };
