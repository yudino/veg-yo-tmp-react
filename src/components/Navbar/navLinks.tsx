import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 5px 1.1em;
  color: #27364a;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  display: flex;
  border-bottom: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-bottom: 2px solid #021630;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props: any) {
    return (
        <NavLinksContainer>
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
            </LinksWrapper>
        </NavLinksContainer>
    )
};