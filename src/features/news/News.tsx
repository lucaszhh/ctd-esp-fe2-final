import React from "react";
import { useState } from "react";
import { INewsNormalizadas } from "./types";
import * as styled from "./styled";
import { RenderNews } from "./ComponentsNews/RenderNews";
import RenderModal from "./ComponentsNews/RenderModal";


export const News = () =>{
  const [modal, setModal] = useState<INewsNormalizadas | null>(null);
  return (
    <styled.ContainerNews>
      <styled.TitleNews>Noticias de los Simpsons</styled.TitleNews>
      <styled.ListNews>
        <RenderNews setModal={setModal}></RenderNews>
        <RenderModal setModal={setModal} modal={modal}/>
      </styled.ListNews>
    </styled.ContainerNews>
  );
};