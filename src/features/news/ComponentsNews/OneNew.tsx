import React from "react";
import * as styled from "../styled";
import { INewsNormalizadas } from "../types";

type Props = {
    oneNew: INewsNormalizadas;
    setModal: React.Dispatch<React.SetStateAction<INewsNormalizadas | null>>;
};

export const OneNew = ({ oneNew, setModal }: Props) => {
  return (
    <styled.CardNew key={oneNew.title}>
      <styled.ImageCardNew src={oneNew.image} />
      <styled.TitleCardNew>{oneNew.title}</styled.TitleCardNew>
      <styled.DateCardNew>{oneNew.date}</styled.DateCardNew>
      <styled.DescriptionCardNew>
        {oneNew.shortDescription}
      </styled.DescriptionCardNew>
      <styled.ButtonLectura onClick={() => setModal(oneNew)}>Ver más</styled.ButtonLectura>
    </styled.CardNew>
  );
};
