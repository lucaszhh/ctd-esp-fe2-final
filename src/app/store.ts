import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import quoteSlice from "../features/quote/quoteSlice";

export const store = configureStore({
  reducer: {
    cita: quoteSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
