import {
  ESTADO_FETCH,
  name_INVALIDO,
  MENSAJE_CARGANDO,
  NO_ENCONTRADO,
} from "./constants";

export const getMessage: (
  quote: string,
  estadoPedido: ESTADO_FETCH
) => string = (quote, estadoPedido) => {
  if (estadoPedido === ESTADO_FETCH.CARGANDO) {
    return MENSAJE_CARGANDO;
  }

  if (estadoPedido === ESTADO_FETCH.ERROR) {
    return name_INVALIDO;
  }

  return quote ? `${quote}` : NO_ENCONTRADO;
};