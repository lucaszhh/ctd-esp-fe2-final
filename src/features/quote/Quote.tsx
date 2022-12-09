import React from "react";
import { useState } from "react";
import { shallowEqual } from "react-redux";
import { Button, Input, AutorQuote, ContainerQuote, TextoQuote } from "./styled";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getStateQuote,
  cleanUp,
  getOrderStatus,
  obtenerQuoteDeLaAPI,
} from "./quoteSlice";
import { getMessage } from "./utils";

function Quote() {
  const [valorInput, setValorInput] = useState("");
  const { quote = "", character = "" } =
    useAppSelector(getStateQuote, shallowEqual) || {};
  const orderStatus = useAppSelector(getOrderStatus);

  const dispatch = useAppDispatch();

  const onClickObtenerQuote = () => dispatch(obtenerQuoteDeLaAPI(valorInput));

  const onClickBorrar = () => {
    dispatch(cleanUp());
    setValorInput("");
  };

  return (
    <ContainerQuote>
      <TextoQuote>{getMessage(quote, orderStatus)}</TextoQuote>
      <AutorQuote>{character}</AutorQuote>
      <Input
        aria-label="Author Quote"
        value={valorInput}
        onChange={(e) => setValorInput(e.target.value)}
        placeholder="Ingresa el nombre del autor"
      />
      <Button
        aria-label={valorInput ? "Obtener cita" : "Obtener cita aleatoria"}
        onClick={onClickObtenerQuote}
      >
        {valorInput ? "Obtener cita" : "Obtener cita aleatoria"}
      </Button>
      <Button aria-label="Borrar" onClick={onClickBorrar} secondary={true}>
        Borrar
      </Button>
    </ContainerQuote>
  );
}
export default Quote;
