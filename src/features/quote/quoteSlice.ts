import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import { STATE_FETCH } from "./constants";
import { getQuote } from "./quoteAPI";
import { IQuote } from "./types";

export interface StateQuote {
  data: IQuote | null;
  state: STATE_FETCH;
}

const initialState: StateQuote = {
  data: null,
  state: STATE_FETCH.INACTIVE,
};

export const obtenerQuoteAsync = createAsyncThunk(
  "quote/obtenerQuote",
  async (character: string) => await getQuote(character)
);

export const quoteSlice = createSlice({
  name: "Quotes",
  initialState,
  reducers: {
    cleanUp: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(obtenerQuoteAsync.pending, (state) => {
        state.state = STATE_FETCH.LOAD;
      })
      .addCase(obtenerQuoteAsync.fulfilled, (state, action) => {
        state.state = STATE_FETCH.INACTIVE;
        state.data = action.payload;
      })
      .addCase(obtenerQuoteAsync.rejected, (state) => {
        state.state = STATE_FETCH.ERROR;
      });
  },
});

export const { cleanUp } = quoteSlice.actions;

export const obtenerQuoteDeLaAPI =
  (character: string) => (dispatch: AppDispatch) => {
    dispatch(cleanUp());
    dispatch(obtenerQuoteAsync(character));
  };

export const getStateQuote = (state: RootState) => state.quote.data;
export const getOrderStatus = (state: RootState) => state.quote.state;

export default quoteSlice.reducer;
