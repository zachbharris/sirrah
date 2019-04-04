import React from 'react';
import styled, { keyframes } from 'styled-components';

import { hensonGold } from '../../theme/colors';

const Available = ({ text, link }) => {
  return (
    <Wrapper>
      <Dot />
      <span>
        {text} <a href={link.href}>{link.text}</a>
      </span>
    </Wrapper>
  );
};

export default Available;

const Wrapper = styled.div`
  grid-area: available;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;

  a {
    color: ${hensonGold};
    font-weight: 600;
    text-decoration: none;
  }

  span {
    @media screen and (max-width: 380px) {
      text-align: center;
      max-width: 80%;
    }
  }
`;

const pulse = keyframes`
 to {
   box-shadow: 0 0 0 5px rgba(64, 232, 61, 0);
 }
`;

const Dot = styled.span`
  display: block;
  background: #40e83d;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  box-shadow: 0 0 0 0 rgba(64, 232, 61, 0.7);
  animation: ${pulse} 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  z-index: 0;
`;
