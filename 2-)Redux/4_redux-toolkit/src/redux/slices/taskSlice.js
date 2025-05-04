import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { taskArray } from "../../constants";

const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: taskArray },
  reducers: {
    addTask: (state, action) => {
      // gelen taske id ekle
      action.payload.id = v4();

      // task dizisine yeni taski ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // id'sini aldığımız elemanın sırasını bul
      const i = state.tasks.findIndex((i) => i.id === action.payload);

      // sırasını bulduğumuz elemanı sil
      state.tasks.splice(i, 1);
    },

    updateTask: (state, action) => {
      // id'sini aldığımız elemanın sırasını bul
      const i = state.tasks.findIndex((i) => i.id === action.payload.id);

      // sırasını bulduğum elemanı güncelle
      state.tasks.splice(i, 1, action.payload);
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
