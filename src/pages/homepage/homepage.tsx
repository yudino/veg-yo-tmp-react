import React from "react";
import Herobanner from "../../components/HeroBanner/herobanner";
import Card from "../../components/Card/card";
import { H1, H2, H3, Marginer } from "../../styled/lib/Title";
import Button from "../../styled/lib/Button";

import BannerImg1 from "../../assets/images/banner-img1.jpg";
import BannerImg2 from "../../assets/images/banner-img2.jpg";
import img_card1 from "../../assets/images/card_img1.jpg"

export default function Homepage() {
  return (
    <div>
      <Herobanner imgBg={BannerImg1}>
        <H1 bg>Veg'Yo Bakery</H1>
        <H2 bg>Coffee shop</H2>
        <Button blue>Découvrir nos spécialités</Button>
      </Herobanner>
      <Marginer height={"65px"} />
      <Card
        img={img_card1}
        width={"68%"}
      >
        <H3>Qui Sommes Nous</H3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum non
          est natus iure optio provident. Voluptatem optio laboriosam suscipit
          eos beatae minima asperiores amet quidem. Cupiditate deserunt quisquam
          modi.
        </p>
        <Marginer height={"25px"} />
        <Button blue>En savoir plus</Button>
      </Card>
      <Marginer height={"65px"} />
      <Herobanner imgBg={BannerImg2}>
        <H2 bg>Nos pâtisseries vegan sont préparées avec amour !</H2>
        <Button>En savoir en plus</Button>
      </Herobanner>
      <Marginer height={"65px"} />
    </div>
  );
}
