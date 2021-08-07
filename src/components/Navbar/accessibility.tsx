import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #50b36b;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #021630;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #021630;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #021630;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props: any) {
  return (
    <AccessibilityContainer>
      <RegisterButton>Inscription</RegisterButton>
      <LoginButton>Connexion</LoginButton>
    </AccessibilityContainer>
  );
}
