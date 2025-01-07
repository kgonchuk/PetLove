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
import { noticesReducer } from "./notices/noticesSlice";
import { favoritesReducer } from "./favorite/favoriteSlice";
import { usersReducer } from "./users/usersSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const favoritesPersist = {
  key: "favorites",
  storage,
  whitelist: ["viewedNotices"],
};

const noticesPersistConfig = {
  key: "notices",
  storage,
  whitelist: ["token"],
};
const userAvatarPersist = {
  key: "users",
  storage,
  whitelist: ["userAvatar"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    news: newsReducer,
    friends: friendsReducer,
    notices: persistReducer(noticesPersistConfig, noticesReducer),
    favorites: persistReducer(favoritesPersist, favoritesReducer),
    userProfile: persistReducer(userAvatarPersist, usersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
