import React from "react";
import { useState } from "react";
import { shallowEqual } from "react-redux";
import { Button, Input, AutorQuote, ContainerQuote, TextoQuote } from "./styled";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  obtenerQuoteDelEstado,
  limpiar,
  obtenerEstadoDelPedido,
  obtenerQuoteDeLaAPI,
} from "./quoteSlice";
import { getMessage } from "./utils";

function Quote() {
  const [valorInput, setValorInput] = useState("");
  const { quote = "", character = "" } =
    useAppSelector(obtenerQuoteDelEstado, shallowEqual) || {};
  const estadoPedido = useAppSelector(obtenerEstadoDelPedido);

  const dispatch = useAppDispatch();

  const onClickObtenerQuote = () => dispatch(obtenerQuoteDeLaAPI(valorInput));

  const onClickBorrar = () => {
    dispatch(limpiar());
    setValorInput("");
  };

  return (
    <ContainerQuote>
      <TextoQuote>{getMessage(quote, estadoPedido)}</TextoQuote>
      <AutorQuote>{character}</AutorQuote>
      <Input
        aria-label="Author Quote"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        placeholder="Ingresa el name del autor"
      />
      <Button
        aria-label={valorInput ? "Obtener Quote" : "Obtener quote aleatoria"}
        onClick={onClickObtenerQuote}
      >
        {valorInput ? "Obtener Quote" : "Obtener quote aleatoria"}
      </Button>
      <Button aria-label="Borrar" onClick={onClickBorrar} secondary={true}>
        Borrar
      </Button>
    </ContainerQuote>
  );
}
export default Quote;
