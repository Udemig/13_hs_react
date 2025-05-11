import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/*
 * createAsync thunk aksiyonu:
 * api isteğinı attıktan sonra api'dan gelen cevaba bağlı olarak reducer'a otomatik olarak haber gönderir
 * api isteği atıldığı anda pending aksiyonu tetikler
 * api isteği başarılı olursa fulfilled aksiyonu tetikler
 * api isteği başarısız olursa rejected aksiyonu tetikler
 */
export const getUsers = createAsyncThunk("getUsers", async () => {
  // api isteğini at
  const res = await axios.get("https://dummyjson.com/users");

  // bu return edilen değer aksiyonun payload'ı olur
  return res.data.users;
});

// başlangıç state'i
const initialState = {
  isLoading: false,
  error: null,
  users: [],
};

const updatedSlice = createSlice({
  name: "updated",
  initialState,
  // senkron aksiyonları yönetmek için kullanırız:
  reducers: {},

  // asenkron askiyonları yönetmek için kullanırız:
  extraReducers: (builder) => {
    // getUsers/pending tetiklendiğinde state'in nasıl değişmeli:
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    // getUsers/rejected tetiklendiğinde state'in nasıl değişmeli:
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    // getUsers/fulfilled tetiklendiğinde state'in nasıl değişmeli:
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    });
  },
});

export default updatedSlice.reducer;
