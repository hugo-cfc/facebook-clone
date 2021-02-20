import React from "react";

import FacebookLogo from "../../images/facebookCircle.svg";
import SearchIcon from "../../images/searchicon.svg";

import { ContainerGeneral, FirstContainer, Logo, LogoInput, InputContainer, SearchInput, MiddleContainer, Ul, Li, LastContainer } from "./style";

export default function Header() {
  return (
    <>
      <ContainerGeneral>
        <FirstContainer>
          <Logo src={FacebookLogo} />
          <InputContainer>
            <LogoInput src={SearchIcon} />
            <SearchInput placeholder="Pesquisar no Facebook" />
          </InputContainer>
        </FirstContainer>
        <MiddleContainer>
          <Ul>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
          </Ul>
        </MiddleContainer>
        <LastContainer>
          sdhakj
        </LastContainer>
      </ContainerGeneral>
    </>
  );
}
