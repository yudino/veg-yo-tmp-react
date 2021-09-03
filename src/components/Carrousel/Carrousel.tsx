import React from "react";
import styled from "styled-components";

interface CarrouselProps {
  children: React.ReactNode | React.ReactNode[];
}

const CarrouselContainer = styled.div`
  /* max-width: 1000px; */
  position: relative;
  margin: auto;
`;

const Slide = styled.div``;

const Cursor = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: #27364a;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: rgba(251, 250, 250, 0.7);
  }
`;

const CursorNext = styled(Cursor)`
  right: 0;
  border-radius: 3px 0 0 3px;
`;

export default function Carrousel({ children }: CarrouselProps) {
  let slideIndex = 1

  React.useEffect(() => {
    showSlides(slideIndex);
  })

  const moveSlide = (n: number) => {
    showSlides(slideIndex += n)
  }

  const showSlides = (n: number) => {
    let slides = Array.from(document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>);
    console.log(slideIndex);
    if (n > slides.length) {
      slideIndex = 1
    } else if (n < 1) {
      slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block"
  }

  return (
    <CarrouselContainer>
      {React.Children.map(children, (child) => (
        <Slide className={"mySlides"}>{child}</Slide>
      ))}
      <Cursor onClick={() => moveSlide(-1)}>&#10094;</Cursor>
      <CursorNext onClick={() => moveSlide(1)}>&#10095;</CursorNext>
    </CarrouselContainer>
  );
}
