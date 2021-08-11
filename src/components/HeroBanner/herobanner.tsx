import React from "react";
import styled from "styled-components";

interface HeroBannerProps {
  imgBg: string;
  title: string;
  subtitle?: string;
  textBtn?: string;
}

type BannerProps = {
  url: string;
};

type ButtonProps = {
  blue: boolean;
};

const fontSize = (min: number, val: number, max: number): string => {
  return `
  font-size: clamp(${min}px, ${val}vw, ${max}px);
  @supports not (font-size: clamp(${min}px, ${val}vw, ${max}px)) {
    font-size: min(max(${min}px, ${val}vw), ${max}px);
  }
  `;
};

const Banner = styled.div<BannerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55%;
  height: 55vh;
  overflow: auto;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
    url("${(props) => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #27364a;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const Title = styled.h1`
  font-family: "PraterBlockFillWeb W03 Regular";
  ${fontSize(45, 6, 72)}
  background: rgba(251, 250, 250, 0.7);
  margin: 0;
  padding: 5px 15px;
`;

const Subtitle = styled(Title)`
  ${fontSize(30, 4, 50)}
  font-weight: 300;
  margin: 18px 0 40px;
  padding: 4px;
`;

const Button = styled.button<ButtonProps>`
  font-family: "ParalucentStencil W00 Medium";
  ${fontSize(18, 2, 20)}
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

export default function Herobanner({
  imgBg,
  title,
  subtitle,
  textBtn,
}: HeroBannerProps) {
  return (
    <Banner url={imgBg}>
      <TextBlock>
        <Title>{title}</Title>
        {subtitle && <Subtitle as="h2">{subtitle}</Subtitle>}
        {textBtn && <Button blue>{textBtn}</Button>}
      </TextBlock>
    </Banner>
  );
}
