import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/authSlice";
import { newsReducer } from "./news/newsSlice";
import { friendsReducer } from "./friends/friendsSlice";
import noticesReducer from "./notices/noticesSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const noticesPersistConfig = {
  key: "notices",
  storage,
  whitelist: ["notices"],
};

const persistedNoticesReducer = persistReducer(
  noticesPersistConfig,
  noticesReducer
);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    news: newsReducer,
    friends: friendsReducer,
    notices: persistedNoticesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
