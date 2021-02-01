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
  Input,
  Button,
  ContainerLink,
  LinkForgetPassWord,
  ButtonNewAccount,
  Footer,
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
        </Container>
        <Footer>adad</Footer>
      </Main>
    </div>
  );
}
