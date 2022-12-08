import React ,{ useState } from "react";
import { NamesSimpsons, INFO_SIMPSONS } from "./constants";
import * as styled from "./styled";

const Bio = () => {
  const [bioActive, setbioActive] = useState(
    INFO_SIMPSONS[NamesSimpsons.BART]
  );
  

  const onClick: (name: NamesSimpsons) => void = (name) =>
    setbioActive(INFO_SIMPSONS[name]);

  const createButtons = () => {
    return Object.keys(INFO_SIMPSONS).map((name: string) => (
      <styled.ButtonBio
        key={name as string}
        onClick={() => onClick(name as NamesSimpsons)}
        isActive={bioActive.id === name ? true: false}
      >
        {name}
      </styled.ButtonBio>
    ));
  };

  return (
    <styled.BioContainer>
      <styled.ContainerButton>{createButtons()}</styled.ContainerButton>
      <div>
        <div>
          <styled.BioImage
            src={bioActive.image}
            alt={bioActive.name}
          />
        </div>
        <div>
          <styled.BioName>{bioActive.name}</styled.BioName>
          <styled.BioDescription>{bioActive.description}</styled.BioDescription>
        </div>
      </div>
    </styled.BioContainer>
  );
};

export default Bio;
