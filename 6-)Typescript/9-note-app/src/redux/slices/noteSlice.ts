import { createSlice } from "@reduxjs/toolkit";
import type { Note } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState: { notes: Note[] } = {
  notes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: {
      // prepare fonksiyonundan sonra çalışıp reducer'u güncelle
      reducer: (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
      },

      // aksiyon tetiklendiğinde payload'ı hazırlayan fonksiyon
      prepare: (title: string, content: string, selectedTags: string[]) => {
        return {
          payload: {
            id: v4(),
            title,
            content,
            tags: selectedTags,
          },
        };
      },
    },

    updateNote: (state, action: PayloadAction<Note>) => {},

    deleteNote: (state, action: PayloadAction<string>) => {},
  },
});

export const { createNote, updateNote, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
