import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/noteSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// reducer'ları persist için birleştir
const rootReducer = combineReducers({
  notes: noteReducer,
});

// persist yapılandırması
const persistConfig = {
  key: "data", // localStore'daki key
  storage, // localStore'u kullan
  whiteList: ["notes"], // persist edilecek reducer'ların listesi
};

// persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store tanımı
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux persist actionlar'Inı serializableCheck'ten çıkar
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

// persistor oluştur
export const persistor = persistStore(store);

// rootstate tipi (store'ın tipi > useSelector için)
export type RootState = ReturnType<typeof store.getState>;

// appdispatch tipi (useDispatch için)
export type AppDispatch = typeof store.dispatch;
