/*
 * Hem reducer'ları hem aksiyon'ları hem de aksiyon tiplerini tek noktada oluşturucaz.
 
 * Nasıl slice oluşturulur ? 
 * import createSlice
 * name: slice ismi > string
 * initialState: başlangıç state'i > object
 */

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // slice'ın ismi
  name: "counter",
  // tutucağımız verilerin ilk değeri
  initialState: { count: 10, name: "Furkan" },
  // hem aksiyon tiplerini hemde görevlerini tanımla
  reducers: {
    increase: (state) => {
      // klasik reduxta:
      // return {...state,count:state.count + 1}
      // toolkitte: (state doğrudan güncellenebilir)
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    reset: (state, action) => {
      state.count = action.payload;
    },
  },
});

// proje kullanıcağımız aksiyonları oluşturmamızı sağlayan fonksiyonları ve aksiyon tiplerini createSlice kendisi oluşt.
export const { increase, decrease, reset } = counterSlice.actions;

// store'a tanıtılacak olan reducer'ı slice createSlice fonksiyonu kendisi oluştur
export default counterSlice.reducer;
