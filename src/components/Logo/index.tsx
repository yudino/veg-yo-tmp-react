import React from 'react'
import styled from 'styled-components'
import CupcakeTextLogo from '../../assets/images/cupcake_text_logo.svg'

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
  width: 174px;
  height: 90px;

  img {
    width: 100%;
    height: 100%;
  }
`;

// const LogoText = styled.h2`
//     font-size: 16px;
//     margin: 0;
//     margin-left: 4px;
//     color: #27364a;
//     font-weight: 500;
// `;

export function Logo(props: any) {
    return (
      <LogoWrapper>
        <LogoImg>
          <img src={CupcakeTextLogo} alt="Veg'yo logo" />
        </LogoImg>
        {/* <LogoText>Veg'Yo Bakery</LogoText> */}
      </LogoWrapper>
    );
}