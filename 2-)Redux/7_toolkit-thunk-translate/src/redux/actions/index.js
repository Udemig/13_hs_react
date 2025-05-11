import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// asenkron aksiyon
export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
  // api isteği at
  const res = await api.get("/languages");

  // askiyonun payload'u olucak değeri return et
  return res.data.languages;
});

// asenkron aksiyon
export const translateText = createAsyncThunk("translate/translateText", async (_, { getState }) => {
  // getStaete: aksiyon içerisinden storedaki verilere erişim sağlar
  const { translateReducer } = getState();

  // api isteği at
  const res = await api.post("", {
    q: translateReducer.textToTranslate,
    source: translateReducer.sourceLang.value,
    target: translateReducer.targetLang.value,
  });

  // askiyonun payload'u olucak değeri return et
  return res.data.data.translations.translatedText[0];
});
