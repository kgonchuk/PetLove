import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://petlove.b.goit.study/api/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("users/signup", userData);
      setAuthHeader(res.data.token);
      Notiflix.Notify.success("Welcome to PetLove project!");
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post("/users/signin", userData);
      setAuthHeader(res.data.token);
      Notiflix.Notify.success("Welcome back to PetLove project!");
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/signout");
    clearAuthHeader();
    Notiflix.Notify.success("We are waiting for you again!");
  } catch (error) {
    Notiflix.Notify.failure(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const refreshedUser = await axios.get("/users/current");
      return refreshedUser.data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getFullUserInfo = createAsyncThunk(
  "users/current",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/users/current/full");
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
export const editUserInfo = createAsyncThunk(
  "auth/editUserInfo",
  async (editData, thunkAPI) => {
    try {
      const resp = await axios.patch("/users/current/edit", editData);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addMyPet = createAsyncThunk(
  "users/adMyPet",
  async (PetData, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/current/pets/add", PetData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeMyPet = createAsyncThunk(
  "current/removeMyPet",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/users/current/pets/remove/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deletePet = createAsyncThunk(
  "current/removeMyPet",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/users/current/pets/remove/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNoticeToViewed = createAsyncThunk(
  "auth/addNoticeToViewed",
  async (notice, { getState }) => {
    const state = getState();
    const currentViewed = state.auth.user.noticesViewed;
    const updatedViewed = [...currentViewed, notice];
    Notiflix.Notify.success("Add viewed successfully!hello");
    return updatedViewed;
  }
);

export const deleteFavoriteNotice = createAsyncThunk(
  "user/deleteFavoriteNotice",
  async (_id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.user.token;

    try {
      const response = await axios.delete(`/notices/favorites/remove/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const addFavoriteNotice = createAsyncThunk(
  "user/addFavoriteNotice",
  async (_id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.user.token;
    const favorites = state.user.user.noticesFavorites;

    if (favorites.some((notice) => notice._id === _id)) {
      Notiflix.Notify.error("This notice is already in favorites", "error");
      return thunkAPI.rejectWithValue({
        message: "This notice is already in favorites",
      });
    }

    try {
      const response = await axios.post(
        `/notices/favorites/add/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getNoticesById = createAsyncThunk(
  "notices/getNoticesById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addToFavorite = createAsyncThunk(
  "notices/addToFavorite",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post(`/notices/favorites/add/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeFromFavorite = createAsyncThunk(
  "notices/removeFromFavorite",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/notices/favorites/remove/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
