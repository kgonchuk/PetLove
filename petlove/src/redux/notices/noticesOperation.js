import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://petlove.b.goit.study/api",
});

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async (
    { page, limit, category, keyword, sex, species, locationId },
    thunkApi
  ) => {
    try {
      if (page === null || limit === null) {
        throw new Error("Page or limit cannot be null");
      }

      const queryParams = {
        page: page || 1, // встановлює значення за замовчуванням, якщо page === null або undefined
        limit: limit || 6,
        category: category || "",
        species: species || "",
        locationId: locationId || "",
        keyword: keyword || "",
      };
      const queryString = new URLSearchParams(queryParams).toString();

      const { data } = await instance.get(`/notices?${queryString}`);
      console.log(data);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "notices/fetchCategories",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get(`/notices/categories`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchGender = createAsyncThunk(
  "notices/fetchGender",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get(`/notices/sex`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchSpecies = createAsyncThunk(
  "notices/fetchSpecies",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get(`/notices/species`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchCities = createAsyncThunk(
  "notices/fetchCities",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get(`/cities`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchNoticeById = createAsyncThunk(
  "notices/fetchNoticeById",
  async (_id, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;

    try {
      const { data } = await instance.get(`/notices/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const fetchAllLocations = createAsyncThunk(
  "notices/fetchAllLocations",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/cities/locations`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchLocations = createAsyncThunk(
  "notices/fetchLocations",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/cities?keyword=${query}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
