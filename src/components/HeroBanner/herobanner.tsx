import React from "react";
import styled from "styled-components";
import { DeviceSize } from "../../components/responsive/index";

interface HeroBannerProps {
  imgBg: string;
  children?: React.ReactNode | React.ReactNode[];
}

type BannerProps = {
  url: string;
};

const Banner = styled.div<BannerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 62%;
  height: 62vh;
  min-height: 443px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
    url("${(props) => props.url}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: ${DeviceSize.tablet}px) {
    text-align: center;
  }
`;


export default function Herobanner({
  imgBg,
  children
}: HeroBannerProps) {
  return (
     <Banner url={imgBg}>
      <TextBlock>
          {children}
      </TextBlock>
    </Banner>
  );
}
