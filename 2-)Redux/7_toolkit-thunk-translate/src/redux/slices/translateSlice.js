import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
  isLoading: false,
  sourceLang: { value: undefined, label: "Dili algıla" }, // kaynak dil
  targetLang: { value: "en", label: "English" }, // hedef dil
  textToTranslate: "", // çevrilecek metin
  translatedText: "", // çevrilmiş metin
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  // senkron aksiyonlaru buradan yönetiriz
  reducers: {
    setSource: (state, action) => {
      state.sourceLang = action.payload;
    },
    setTarget: (state, action) => {
      state.targetLang = action.payload;
    },
    setText: (state, action) => {
      state.textToTranslate = action.payload;
    },
    swap: (state) => {
      // state'Lerin şuanki değerilini değikşkene aktar
      const currentSource = state.sourceLang;
      const currentTarget = state.targetLang;
      const currentText = state.textToTranslate;
      const currentTranslated = state.translatedText;

      // state'leri değiştir
      state.sourceLang = currentTarget;
      state.targetLang = currentSource;
      state.textToTranslate = currentTranslated;
      state.translatedText = currentText;
    },
  },
  // asenkron aksiyonlaru buradan yönetiriz
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
      state.translatedText = "";
    });
    builder.addCase(translateText.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(translateText.fulfilled, (state, action) => {
      state.isLoading = false;
      state.translatedText = action.payload;
    });
  },
});

export const { setSource, setTarget, setText, swap } = translateSlice.actions;

export default translateSlice.reducer;
