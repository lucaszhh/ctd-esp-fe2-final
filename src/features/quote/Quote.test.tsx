import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test-utils";
import Quote from "./Quote";


const setupRender = () => render(<Quote />);

describe("initial render in Quote component", () => {
  it("initial render quote text", async () => { 
    setupRender();
    const textQuote = await screen.findByText("No se encontro ninguna cita"); 
    expect(textQuote).toBeInTheDocument();
  });

  it("initial render input search", async() => {
    setupRender();
    const inputSearch = await screen.findByPlaceholderText("Ingresa el nombre del autor");
    expect(inputSearch).toBeVisible();
  });

  it("initial render random quote button", async() => {
    setupRender();
    const quoteButton = await screen.findByLabelText("Obtener cita aleatoria");
    expect(quoteButton).toBeEnabled();
  });

  it ("initial render delete button", async() => {
    setupRender();
    const deleteButton = await screen.findByLabelText("Borrar");
    expect(deleteButton).toBeEnabled();
  });
});

describe("render numeric value", () => { 
  it("render error message when use numeric value in input search", async () => {
    setupRender();
    const inputSearch = await screen.findByPlaceholderText("Ingresa el nombre del autor");
    const quoteButton = await screen.findByLabelText("Obtener cita aleatoria");
    await userEvent.clear(inputSearch);
    fireEvent.change(inputSearch, { target: { value: "123" } });
    fireEvent.click(quoteButton);
    await waitFor(() =>{
      const textError = screen.queryByText("Por favor ingrese un nombre válido"); 
      expect(textError).toBeInTheDocument();
    });
  });
});

describe("render quote to input search", () =>{
  it("render random quote with character name when click in get random quote button", async()=>{
    setupRender();
    const quoteButton = await screen.findByLabelText("Obtener cita aleatoria");
    const inputSearch = await screen.findByPlaceholderText("Ingresa el nombre del autor");
    
    await userEvent.clear(inputSearch);
    fireEvent.click(quoteButton);

    expect(screen.findByText("Oh, so they have Internet on computers now!")).toBeInTheDocument();
    expect(screen.findByText("Homer Simpson")).toBeInTheDocument();

  });

  it("render quote message when use author value in input search", async () => {
    setupRender();
    const inputSearch = await screen.findByPlaceholderText("Ingresa el nombre del autor");
    const quoteButton = await screen.findByLabelText("Obtener cita aleatoria");
    await userEvent.clear(inputSearch);
    fireEvent.change(inputSearch, { target: { value: "Homer Simpson" } });
    fireEvent.click(quoteButton);
    expect(screen.findByText("Oh, so they have Internet on computers now!")).toBeInTheDocument();
    expect(screen.findByText("Homer Simpson")).toBeInTheDocument();

  });
});  