import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import { ESTADO_FETCH } from "./constants";
import { getQuote } from "./quoteAPI";
import { IQuote } from "./types";

export interface EstadoQuote {
  data: IQuote | null;
  estado: ESTADO_FETCH;
}

const initialState: EstadoQuote = {
  data: null,
  estado: ESTADO_FETCH.INACTIVO,
};

export const obtenerQuoteAsync = createAsyncThunk(
  "quote/obtenerQuote",
  async (character: string) => await getQuote(character)
);

export const quoteSlice = createSlice({
  name: "Quotes",
  initialState,
  reducers: {
    limpiar: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(obtenerQuoteAsync.pending, (state) => {
        state.estado = ESTADO_FETCH.CARGANDO;
      })
      .addCase(obtenerQuoteAsync.fulfilled, (state, action) => {
        state.estado = ESTADO_FETCH.INACTIVO;
        state.data = action.payload;
      })
      .addCase(obtenerQuoteAsync.rejected, (state) => {
        state.estado = ESTADO_FETCH.ERROR;
      });
  },
});

export const { limpiar } = quoteSlice.actions;

export const obtenerQuoteDeLaAPI =
  (character: string) => (dispatch: AppDispatch) => {
    dispatch(limpiar());
    dispatch(obtenerQuoteAsync(character));
  };

export const obtenerQuoteDelEstado = (state: RootState) => state.quote.data;
export const obtenerEstadoDelPedido = (state: RootState) => state.quote.estado;

export default quoteSlice.reducer;
