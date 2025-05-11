import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { params } from "../../utils/constants";

const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // api isteğini at
  const res = await api.get("/list-in-boundary", { params });

  // aksiyonun payload'ı
  return res.data.flightsList;
});

export { getFlights };
