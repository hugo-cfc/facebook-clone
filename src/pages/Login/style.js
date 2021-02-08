import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Main = styled.main`
  height: 100vh;
`;

export const Container = styled.div`
  height: 75vh;
  width: 50%;
  margin: 0 auto;
  padding-top: 10%;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.section`
  width: 50%;
`;

export const Logo = styled.img`
  width: 301px;
  height: 106px;
  margin-left: -26px;
`;

export const Article = styled.article``;

export const H2 = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  font-family: Helvetica;
  font-weight: normal;
`;

export const ExternalLoginContainer = styled.div`
  width: 40%;
`;

export const LoginContainer = styled.div`
  height: 311px;
  padding: 0 10px;
  padding-top: 10px;
  padding-bottom: 24px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  && {
    width: 100%;
    margin: 6px 0;
    border: 1px solid #dddfe2;
    padding: 14px 16px;
    border-radius: 6px;
    &::placeholder {
      opacity: 0.8;
    }
    &:focus {
      outline: none;
      border: 1px solid #1877f2;
      box-shadow: 0 0 0 2px #e7f3ff;
      caret-color: #1877f2;
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 6px;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  background-color: #1877f2;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #166fe5;
    transition: 0.8s;
  }
`;

export const ContainerLink = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dadde1;
  margin-bottom: 20px;
  text-align: center;
`;

export const LinkForgetPassWord = styled(NavLink)`
  color: #1877f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonNewAccount = styled.button`
  padding: 10px 16px;
  margin: 0 auto;
  border-radius: 6px;
  background: #42b72a;
  font-weight: 600;
  color: #fff;
  border: none;
  font-size: 17px;
  font-size: inherit;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #36a420;
    border-color: #36a420;
  }
`;

export const CreatePageContainer = styled.div`
  margin-top: 28px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`;

export const CreatePageLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  height: 25vh;
  background: ${(props) => props.theme.colors.primary};
`;

export const InternalFooterContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const LinkFooter = styled(NavLink)`
  color: ${(props) => props.theme.colors.textSecundary};
  font-size: 12px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
