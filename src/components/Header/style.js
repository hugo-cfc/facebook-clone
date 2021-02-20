import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const ContainerGeneral = styled.div`
  height: 56px;
  padding: 0 16px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
`;

export const FirstContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  margin-right: 12px;
`;

export const InputContainer = styled.div`
  height: 40px;
  width: 240px;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  border-radius: 50px;
`;

export const LogoInput = styled.img`
  width: 16px;
  margin-left: 10px;
`;

export const SearchInput = styled.input`
  background: ${(props) => props.theme.colors.background};
  border: none;
  outline: none;
  height: 40px;
  padding: 16px 9px;
  box-sizing: border-box;
`;

export const MiddleContainer = styled.div``;

export const Ul = styled.ul``;

export const Li = styled.li``;

export const LinksNav = styled(NavLink)`
  text-decoration: none;
`;

export const LastContainer = styled.div``;
