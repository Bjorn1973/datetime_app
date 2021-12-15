import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDateTime = createAsyncThunk(
  "datetime/getDateTime",
  async (number) => {
    const response = await axios(
      `https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp=${number}`
    );
    return response.data;
  }
);

const dateSlice = createSlice({
  name: "datetime",
  initialState: {
    datetime: "",
    loading: false,
    error: false,
  },
  reducers: {
    clearInput(state = initialState, action) {
      state.datetime = "";
    },
  },
  extraReducers: {
    [getDateTime.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getDateTime.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
    [getDateTime.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.datetime = payload;
    },
  },
});
export const { clearInput } = dateSlice.actions;
export default dateSlice.reducer;
