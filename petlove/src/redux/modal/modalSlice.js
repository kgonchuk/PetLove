import { createSlice } from "@reduxjs/toolkit";
import { fetchNoticeById } from "../notices/noticesOperation";

const initialState = {
  isLoading: false,
  modalData: null,
  modal: {},
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      const modalId = action.payload;
      state.modal[modalId] = true;
    },
    closeModal(state, action) {
      const modalId = action.payload;
      state.modal[modalId] = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNoticeById.fulfilled, (state, action) => {
      state.modalData = action.payload;
    });
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
