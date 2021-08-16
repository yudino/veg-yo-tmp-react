import styled from "styled-components";

type ButtonProps = {
    blue?: boolean;
};


const Button = styled.button<ButtonProps>`
  font-family: "ParalucentStencil W00 Medium";
  font-size: clamp(18px, 2vw, 20px);
  @supports not (font-size: clamp(18px, 2vw, 20px)) {
    font-size: min(max(18px, 2vw), 20px);
  }
  background-color: ${(props) =>
    props.blue ? "#27364a" : "rgba(251, 250, 250, 0.7)"};
  color: ${(props) => (props.blue ? "#fff" : "#27364a")};
  padding: 15px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
  transition-timing-function: ease-out;
  &:hover {
    background-color: ${(props) =>
      props.blue ? "rgba(251, 250, 250, 0.7)" : "#27364a"};
    color: ${(props) => (props.blue ? "#27364a" : "#fff")};
  }
`;

export default Button;