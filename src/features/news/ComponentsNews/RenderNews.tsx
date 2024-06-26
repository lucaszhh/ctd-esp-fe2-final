import React from "react";
import { useFakeRest } from "../UtilsNews/useFakeRest";
import { OneNew } from "./OneNew";
import { INewsNormalizadas } from "../types";

type Props = {
  setModal: React.Dispatch<React.SetStateAction<INewsNormalizadas | null>>;
};

export const RenderNews = ({setModal}: Props) => {
  const news = useFakeRest();
  return (
    <>
      {news.map((oneNew) => 
        <OneNew key={oneNew.id} setModal={setModal} oneNew={oneNew} />
      )}
    </>
  );
};



