import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import { Logo } from '../Logo';
import { DeviceSize } from '../responsive';
import { Accessibility } from './accessibility';
import { MobileNavLinks } from './mobileNavLinks';
import { NavLinks } from './navLinks';

const NavBarContainer = styled.div`
max-width: 100%;
height: 114px;
box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
display: flex;
align-items: center;
padding: 0 24px;
`;


const LeftSection = styled.div`
    display: flex;
`;

const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
`;

const RightSection = styled.div`
    display: flex;
`;

export function Navbar(props: any) {
    const isTablet = useMediaQuery({ maxWidth: DeviceSize.tablet });
    
    return (
      <NavBarContainer>
        <LeftSection>
          <Logo />
        </LeftSection>
        <MiddleSection>{!isTablet && <NavLinks />}</MiddleSection>
        <RightSection>
          {!isTablet && <Accessibility />}
          {isTablet && <MobileNavLinks />}
        </RightSection>
      </NavBarContainer>
    );
}