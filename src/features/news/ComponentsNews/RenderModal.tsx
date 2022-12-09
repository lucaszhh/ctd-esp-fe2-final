import React from "react";
import { INewsNormalizadas } from "../types";
import { Modal } from "./Modal";

type Props = {
    setModal: React.Dispatch<React.SetStateAction<INewsNormalizadas | null>>;
    modal: INewsNormalizadas | null;
};

const RenderModal = ({modal,setModal}: Props) => {
  if(modal){
    if(modal.isPremium){
      return<Modal isPremium={true} setModal={setModal}></Modal>;
    }
    return <Modal isPremium={false} modal={modal} setModal={setModal}/>;
  }
  return null;
};

export default RenderModal;