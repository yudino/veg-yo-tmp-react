import React from "react";
import Herobanner from "../../components/HeroBanner/herobanner";
import heroBannerImg1 from "../../assets/images/banner-img1.png";

export default function Homepage() {
  return (
    <div>
      <Herobanner
        imgBg={heroBannerImg1}
        title={"Veg'Yo Bakery"}
        subtitle={"Coffee shop"}
        textBtn={"Découvrir nos spécialités"}
      />
    </div>
  );
}
