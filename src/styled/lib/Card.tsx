import styled from "styled-components";
import { DeviceSize } from "../../components/responsive/index";

type CardProps = {
  col?: boolean;
  width: string;
};

export const CardContainer = styled.div<CardProps>`
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  width: ${(props) => props.width};
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: ${DeviceSize.tablet}px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: none;
  }
`;

export const CardImg = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${DeviceSize.tablet}px) {
    width: 80%;
  }
`;

export const CardBody = styled.div`
  padding: 25px;
  width: 100%;
  @media (max-width: ${DeviceSize.tablet}px) {
    width: 80%;
  }
`;
