import React from 'react';
import styled from 'styled-components';

const Orb = () => {

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        margin-left: -37vh;
        margin-top: -37vh;
        background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
        filter: blur(100px);
        border-radius: 50%;
    `;


  return (
    <div>
      <OrbStyled></OrbStyled>
    </div>
  )
}

export default Orb;
