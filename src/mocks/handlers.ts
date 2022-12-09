import { rest } from "msw";
import { API_URL } from "../app/constants";
import { IQuote } from "../features/quote/types";


export const randomQuote: IQuote = {
  character: "Homer Simpson",
  quote: "Oh, so they have Internet on computers now!",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  directionCharacter: "Right",
};

export const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    if(req.url.searchParams.get("character")){
      return res(ctx.json(randomQuote));
    }
  }),
];
