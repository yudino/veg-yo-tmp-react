import Herobanner from "../../components/HeroBanner/herobanner";
import Card from "../../components/Card/card";
import Carrousel from "../../components/Carrousel/Carrousel";
import { H1, H2, H3, Marginer } from "../../styled/lib/Title";
import Button from "../../styled/lib/Button";
import { Container, Section } from "../../styled/lib/Container";
import Image from "../../styled/lib/Image"
import Footer from "../../components/Footer/Footer";

import BannerImg1 from "../../assets/images/banner-img1.jpg";
import BannerImg2 from "../../assets/images/banner-img2.jpg";
import img_card1 from "../../assets/images/card_img1.jpg"
import img_card2 from "../../assets/images/card_img2.jpg"
import carte from "../../assets/images/map.png"

export default function Homepage() {
  return (
    <div>
      <Herobanner imgBg={BannerImg1}>
        <H1 bg>Veg'Yo Bakery</H1>
        <H2 bg>Coffee shop</H2>
        <Button blue>Découvrir nos spécialités</Button>
      </Herobanner>
      <Marginer height={"65px"} />
      <Card img={img_card1} width={"68%"}>
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
      <H2 upper center>
        Nos pâtisseries artisanales
      </H2>
      <Carrousel>
        <Card img={img_card2} width={"100%"}>
          <H3>Fondant au chocolat</H3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            non est natus iure optio provident. Voluptatem optio laboriosam
            suscipit eos beatae minima asperiores amet quidem. Cupiditate
            deserunt quisquam modi.
          </p>
          <Marginer height={"25px"} />
          <Button blue>En savoir plus</Button>
        </Card>
        <Card img={img_card1} width={"100%"}>
          <H3>Qui Sommes Nous</H3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <Marginer height={"25px"} />
          <Button blue>En savoir plus</Button>
        </Card>
      </Carrousel>
      <Marginer height={"65px"} />
      <H2 upper center>
        Infos Pratiques
      </H2>
      <Container cols={2} gap={35} padding={25} resp>
        <Section>
          <Image width={"84%"}>
            <img src={carte} alt={"Carte localisation Veg'Yo"} />
          </Image>
        </Section>
        <Section>
          <H3>Adresse</H3>
          <p>
            Donec commodo massa ut vestibulum molestie. Quisque auctor nunc ut
            magna pretium finibus. Nulla eget nisl nec ligula molestie efficitur
            ac non mauris. Donec accumsan nibh lobortis, facilisis nisi sit
            amet, accumsan nibh.
          </p>
          <Marginer height={"25px"} />
          <H3>Horaires</H3>
          <p>Consectetur adipisicing elit.</p>
        </Section>
      </Container>
      <Marginer height={"65px"} />
      <Footer />
    </div>
  );
}
