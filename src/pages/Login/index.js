import React from "react";

import LogoFacebook from "../../images/facebookLogin.svg";

import {
  Main,
  Container,
  Description,
  Logo,
  Article,
  H2,
  LoginContainer,
  ExternalLoginContainer,
  Input,
  Button,
  ContainerLink,
  LinkForgetPassWord,
  ButtonNewAccount,
  CreatePageContainer,
  CreatePageLink,
  Footer,
  InternalFooterContainer,
  LinkFooter,
} from "./style";

export default function Login() {
  return (
    <div>
      <Main>
        <Container>
          <Description>
            <Logo src={LogoFacebook} />
            <Article>
              <H2>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</H2>
            </Article>
          </Description>
          <ExternalLoginContainer>
            <LoginContainer>
              <form>
                <Input type="email" placeholder="Email ou telefone" autofocus="1" />
                <Input type="password" placeholder="Senha" placeholderTextColor="red" />
                <Button>Entrar</Button>
                <ContainerLink>
                  <LinkForgetPassWord to="/">Esqueceu a senha?</LinkForgetPassWord>
                </ContainerLink>
                <ButtonNewAccount>Criar nova conta</ButtonNewAccount>
              </form>
            </LoginContainer>
            <CreatePageContainer>
              <CreatePageLink to="/">Criar uma Página</CreatePageLink> para uma celebridade, banda ou empresa.
            </CreatePageContainer>
          </ExternalLoginContainer>
        </Container>
        <Footer>
          <InternalFooterContainer>
            <LinkFooter to="/">Português(Brasil)</LinkFooter>
          </InternalFooterContainer>
        </Footer>
      </Main>
    </div>
  );
}
