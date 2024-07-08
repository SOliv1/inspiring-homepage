import { createSlice } from "@reduxjs/toolkit";
import { getBackgroundImage } from "../backgroundImage/backgroundImageSlice";
import { getQuote } from "../quote/quoteSlice";
import { getWeather } from "../weather/weatherSlice";

export const errorSlice = createSlice({
  name: "errors",
  initialState: {
    errorMessage: "",
    retryHandler: null,
  },
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
      state.retryHandler = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBackgroundImage.rejected, (state, action) => {
        state.errorMessage = "Getting image failed.";
        state.retryHandler = action.meta.arg;
      })
      .addCase(getQuote.rejected, (state, action) => {
        state.errorMessage = "Getting the quote failed.";
        state.retryHandler = action.meta.arg;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.errorMessage = "Getting the weather failed.";
        state.retryHandler = action.meta.arg;
      });
  },
});

export const { clearErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;
