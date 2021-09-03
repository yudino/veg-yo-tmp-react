import styled from "styled-components";

type TitleProps = {
  bg?: boolean;
  upper?: boolean;
  center?: boolean;
  margin?: string;
  padding?: string;
};

type MarginerProps = {
  height: string;
}

export const Marginer = styled.div<MarginerProps>`
  height: ${props => props.height};
`;

export const H1 = styled.h1<TitleProps>`
  font-family: "PraterBlockFillWeb W03 Regular";
  font-size: clamp(45px, 6vw, 72px);
  @supports not (font-size: clamp(45px, 6vw, 72px)) {
    font-size: min(max(45px, 6vw), 72px);
  }
  color: #27364a;
  text-transform: ${(props) => (props.upper ? "uppercase" : "none")};
  text-align: ${(props) => (props.center ? "center" : "start")};
  background: ${(props) =>
    props.bg ? "rgba(251, 250, 250, 0.7)" : "transparent"};
  margin: 0;
  padding: 5px 15px;
`;

export const H2 = styled.h2<TitleProps>`
  font-family: "PraterBlockFillWeb W03 Regular";
  font-size: clamp(30px, 4vw, 50px);
  @supports not (font-size: clamp(30px, 4vw, 50px)) {
    font-size: min(max(30px, 4vw), 50px);
  }
  color: #27364a;
  text-transform: ${(props) => (props.upper ? "uppercase" : "none")};
  text-align: ${(props) => (props.center ? "center" : "start")};
  background: ${(props) =>
    props.bg ? "rgba(251, 250, 250, 0.7)" : "transparent"};
  font-weight: 300;
  margin: ${(props) => (props.margin ? props.margin : "18px 0 40px")};
  padding: ${(props) => (props.padding ? props.padding : "4px")};
`;

export const H3 = styled.h3<TitleProps>`
  font-family: "PraterBlockFillWeb W03 Regular";
  font-size: clamp(30px, 4vw, 45px);
  @supports not (font-size: clamp(30px, 4vw, 45px)) {
    font-size: min(max(30px, 4vw), 45px);
  }
  color: #27364a;
  text-transform: ${(props) => (props.upper ? "uppercase" : "none")};
  text-align: ${(props) => (props.center ? "center" : "start")};
  background: ${(props) =>
    props.bg ? "rgba(251, 250, 250, 0.7)" : "transparent"};
  font-weight: 300;
  margin: ${(props) => (props.margin ? props.margin : "18px 0 40px")};
  padding: ${(props) => (props.padding ? props.padding : "4px")};
`;
export const H4 = styled.h4<TitleProps>`
  font-family: Montserrat, sans-serif;
  font-size: clamp(15px, 4vw, 18px);
  @supports not (font-size: clamp(15px, 4vw, 18px)) {
    font-size: min(max(15px, 4vw), 18px);
  }
  color: black;
  text-transform: ${(props) => (props.upper ? "uppercase" : "none")};
  text-align: ${(props) => (props.center ? "center" : "start")};
  background: ${(props) =>
    props.bg ? "rgba(251, 250, 250, 0.7)" : "transparent"};
  font-weight: 700;
  margin: ${(props) => (props.margin ? props.margin : "18px 0 40px")};
  padding: ${(props) => (props.padding ? props.padding : "4px")};
`;
