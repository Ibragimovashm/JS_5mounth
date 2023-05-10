import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAPi = createAsyncThunk("itemData/getAPi", async () => {
  const {data} = await axios.get(`https://fakerapi.it/api/v1/products?_quantity=100`);
  return data.data;
});

const itemData = createSlice({
  name: "getAPi",
  initialState: {
    item: [],
    loader: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getAPi.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(getAPi.fulfilled, (state, action) => {
      state.loader = false;
      state.item = action.payload;
    });
    builder.addCase(getAPi.rejected, (state, action) => {
      state.item = [];
      state.error = action.error.message;
    });
  },
});

export default itemData.reducer;
export const apiSelect = state => state.itemDataSlice;
