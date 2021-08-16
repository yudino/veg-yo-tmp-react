import styled from "styled-components";

type TitleProps = {
  bg?: boolean;
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
  background: ${(props) =>
    props.bg ? "rgba(251, 250, 250, 0.7)" : "transparent"};
  font-weight: 300;
  margin: 18px 0 40px;
  padding: 4px;
`;

export const H3 = styled(H2)``;
