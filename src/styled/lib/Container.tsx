import styled from "styled-components";

type ContainerProps = {
    cols: number,
    gap?: number,
    padding: number,
    bg?: string,
    resp?: boolean,
}

type CtnProps = {
    colSize?: string,
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-column-gap: ${(props) => (props.gap ? props.gap + "px" : "20px")};
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  padding: ${(props) => props.padding + "px"};
  ${(props) =>
    props.resp ? "@media (max-width: 768px) { grid-template-columns: 1fr; }" : ""}
  ${(props) => (props.bg ? "background:" + props.bg + ";" : "")}
`;

export const Section = styled.div<CtnProps>`
${props => props.colSize ? "grid-column:" + props.colSize + ";": ""}
`;
