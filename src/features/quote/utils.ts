import {
  STATE_FETCH,
  INVALID_NAME,
  LOAD_MESSAGE,
  NOT_FOUND,
} from "./constants";

export const getMessage: (
  quote: string,
  estadoPedido: STATE_FETCH
) => string = (quote, estadoPedido) => {
  if (estadoPedido === STATE_FETCH.LOAD) {
    return LOAD_MESSAGE;
  }

  if (estadoPedido === STATE_FETCH.ERROR) {
    return INVALID_NAME;
  }

  return quote ? `${quote}` : NOT_FOUND;
};