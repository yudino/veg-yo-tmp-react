import React from "react";
import { CardBody, CardImg, CardContainer } from "../../styled/lib/Card";

interface CardProps {
  img: string;
  alt?: string;
  width: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default function Card({ img, alt, width, children }: CardProps) {
  return (
    <CardContainer width={width}>
      <CardImg>
        <img src={img} alt={alt} />
      </CardImg>
      <CardBody>
        {children}
      </CardBody>
    </CardContainer>
  );
}
