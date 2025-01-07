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

export const editUserInfo = createAsyncThunk(
  "userProfile/editUserInfo",
  async (userData, thunkAPI) => {
    try {
      await axios.patch("users/current/edit", userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllUserInfo = createAsyncThunk(
  "auth/getAllUserInfo",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/users/current/full");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addMyPet = createAsyncThunk(
  "auth/adMyPet",
  async (PetData, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/current/pets/add", PetData);
      Notiflix.Notify.success("Welcome to PetLove project!");
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addPet = createAsyncThunk(
  "user/addPets",
  async (userData, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.user.token;

    try {
      const response = await axios.post("/users/current/pets/add", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Notiflix.Notify.success("Pet added successfully!");

      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(
        "Failed to add pet: " +
          (error.response?.data?.message || "Unknown error")
      );

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
