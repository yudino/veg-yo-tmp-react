import React from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import { Marginer } from "../../styled/lib/Title";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 15px 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 115px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;


export function MobileNavLinks(props: any) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="#">Carte</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Brunch</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Réservation</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Qui sommes-nous</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Contact</Link>
          </LinkItem>
          <Marginer height={ "1em"}/>
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
