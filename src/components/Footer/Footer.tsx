import React from "react";
import styled from "styled-components";
import { Container, Section } from "../../styled/lib/Container";
import { H4 } from "../../styled/lib/Title";
import Image from "../../styled/lib/Image";
import cupcake from "../../assets/images/cupcake.svg";

const Wrapper = styled(Container)`
  @media (min-width: 768px) {
    width: 60%;
    margin: auto;
  }
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkItem = styled.li``;

const LogoFooter = styled(Image)`
  position: relative;
  bottom: 79px;
  left: 25px;

  @media (min-width: 768px) {
    width: 180px;
  }
`;

const Copyright = styled.p`
  text-align: center;
  color: white;
  font-size: clamp(10px, 4vw, 13px);
  @supports not (font-size: clamp(10px, 4vw, 13px)) {
    font-size: min(max(10px, 4vw), 13px);
  }
`;

function Footer() {
  return (
    <footer style={{background: "#3486f4"}}>
      <Wrapper cols={3} padding={35} >
        <Section>
          <H4 margin={"0"} padding={"0"}>
            Carte du site
          </H4>
          <LinksWrapper>
            <LinkItem>
              <p>Carte</p>
            </LinkItem>
            <LinkItem>
              <p>Brunch</p>
            </LinkItem>
            <LinkItem>
              <p>Réservations</p>
            </LinkItem>
            <LinkItem>
              <p>Qui sommes nous</p>
            </LinkItem>
            <LinkItem>
              <p>Contact</p>
            </LinkItem>
          </LinksWrapper>
        </Section>
        <Section>
          <H4 margin={"0"} padding={"0"}>
            Catégories
          </H4>
          <LinksWrapper>
            <LinkItem>
              <p>Nos pâtisseries artisanales</p>
            </LinkItem>
            <LinkItem>
              <p>Nos Brunch du moment</p>
            </LinkItem>
            <LinkItem>
              <p>Infos pratiques</p>
            </LinkItem>
          </LinksWrapper>
        </Section>
        <Section>
          <LogoFooter>
            <img src={cupcake} alt="logo cupcake" />
          </LogoFooter>
        </Section>
      </Wrapper>
      <Container cols={1} padding={10} bg={"#266836"}>
        <Copyright>
          Copyright {new Date().getFullYear()} &copy; Veg'Yo Bakery - Tous
          droits réservés{" "}
        </Copyright>
      </Container>
    </footer>
  );
}

export default Footer;
