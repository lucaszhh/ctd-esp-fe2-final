import React from "react";
import * as styled from "../styled";
import { INewsNormalizadas } from "../types";
import { SuscribeImage, CloseButton as Close } from "../../../assets";


type Props = { 
  isPremium: boolean,
  modal?:INewsNormalizadas | null,
  setModal: React.Dispatch<React.SetStateAction<INewsNormalizadas | null>>;
}

const modalConstants = {
  title: "Suscríbete a nuestro Newsletter",
  description:"Suscríbete a nuestro newsletter y recibe news de nuestros personajes favoritos.",
};


export const Modal = ({isPremium, modal, setModal}: Props) => {
  
  function alertSuscription() {
    setTimeout(() => {
      alert("Suscripto!");
      setModal(null);
    }, 1000);}

  const imgSrc = isPremium?SuscribeImage:modal?.image;
  const imgAlt = isPremium?"news-image":"mr-burns-excelent";

  const titleModal = isPremium?modalConstants.title:modal?.title;
  const descriptionModal = isPremium?modalConstants.description:modal?.description;


  return (

    <styled.ContainerModal>
      <styled.CardModal>
        <styled.CloseButton onClick={() => setModal(null)}>
          <img src={Close} alt="close-button" />
        </styled.CloseButton>
        <styled.ImageModal 
          src={imgSrc} 
          alt={imgAlt} />
        <styled.ContainerText>
          <styled.TitleModal>{titleModal}</styled.TitleModal>
          <styled.DescriptionModal>{descriptionModal}</styled.DescriptionModal>
          {isPremium && 
        <styled.ButtonSuscribe
          onClick={() => alertSuscription()}>
          Suscríbete
        </styled.ButtonSuscribe>}
        </styled.ContainerText>
      </styled.CardModal>
    </styled.ContainerModal>
  );
};
