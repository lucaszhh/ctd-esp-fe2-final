import React from "react";
import { useState } from "react";
import { fakeRest} from "./UtilsNews/fakeRest";
import { INewsNormalizadas } from "./types";
import * as styled from "./styled";
import { New } from "./ComponentsNews/New";
import { Modal } from "./ComponentsNews/Modal";


export const News = () =>{
  const [news, setNews] = useState<INewsNormalizadas[]>([]);
  const [modal, setModal] = useState<INewsNormalizadas | null>(null);
  
  setNews(fakeRest());

  return (
    <styled.ContainerNews>
      <styled.TitleNews>News de los Simpsons</styled.TitleNews>
      <styled.ListNews>
        {news.map((oneNew) => (
          <New setModal={setModal} oneNew={oneNew} />
        ))}
        {
        modal ? (
          modal.isPremium ? (
            <Modal isPremium={true} setModal={setModal}/>
          ) : (
            <Modal isPremium={false} modal={modal} setModal={setModal}/>
          )
        ) : null}
      </styled.ListNews>
    </styled.ContainerNews>
  );
};