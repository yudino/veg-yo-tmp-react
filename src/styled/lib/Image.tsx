import styled from "styled-components";

type ImageProps = {
  width?: string;
}

const Image = styled.div<ImageProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  ${(props) => (props.width && "margin:auto;")}
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Image;