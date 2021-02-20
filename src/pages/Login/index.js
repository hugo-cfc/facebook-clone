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
  LinkButton,
  ContainerLink,
  LinkForgetPassWord,
  ButtonNewAccount,
  CreatePageContainer,
  CreatePageLink,
  Footer,
  InternalFooterContainer,
  LanguagesContainer,
  LinkFooter,
  ButtonPlusFooter,
  LinksFooterContainer,
  Ul,
  Li,
  CorporightContainer,
} from "./style";

export default function Login() {
  const date = new Date();

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
                <Input type="password" placeholder="Senha" />
                <LinkButton to="/feed">
                  <Button>Entrar</Button>
                </LinkButton>
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
            <LanguagesContainer>
              <LinkFooter to="/" language>
                Português (Brasil)
              </LinkFooter>
              <LinkFooter to="/" language>
                English (US)
              </LinkFooter>
              <LinkFooter to="/" language>
                Español
              </LinkFooter>
              <LinkFooter to="/" language>
                Français (France)
              </LinkFooter>
              <LinkFooter to="/" language>
                Italiano
              </LinkFooter>
              <LinkFooter to="/" language>
                العربية
              </LinkFooter>
              <LinkFooter to="/" language>
                Deutsch
              </LinkFooter>
              <LinkFooter to="/" language>
                हिन्दी
              </LinkFooter>
              <LinkFooter to="/" language>
                中文(简体)
              </LinkFooter>
              <LinkFooter to="/" language>
                日本語
              </LinkFooter>
              <ButtonPlusFooter>+</ButtonPlusFooter>
            </LanguagesContainer>
            <LinksFooterContainer>
              <Ul>
                <Li>
                  <LinkFooter to="/">Cadastre-se</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Entrar</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Messenger</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Facebook Lite</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Watch</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Pessoas</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Páginas</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Categorias de Página</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Locais</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Jogos</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Marketplace</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Facebook Pay</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Grupos</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Vagas de emprego</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Oculus</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Portal</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Instagram</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Local</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Campanhas de arrecadação de fundos</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Serviços</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Central de Informações de Votação</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Sobre</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Criar Anúncio</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Criar Página</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Desenvolvedores</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Carreiras</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Privacidade</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Cookies</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Escolhas para anúncios</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Termos</LinkFooter>
                </Li>
                <Li>
                  <LinkFooter to="/">Ajuda</LinkFooter>
                </Li>
              </Ul>
            </LinksFooterContainer>
            <CorporightContainer>Facebook &copy; {date.getFullYear()} </CorporightContainer>
          </InternalFooterContainer>
        </Footer>
      </Main>
    </div>
  );
}
