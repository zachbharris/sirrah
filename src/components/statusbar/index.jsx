import React from 'react';
import { useStore } from 'easy-peasy';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

import { soulBlack, hensonGold } from '../../theme/colors';

const StatusBar = () => {
  const hireable = useStore(state => state.user.data.hireable);
  const loading = useStore(state => state.loading);

  const props = useSpring({
    transform: `translateY(${loading ? '-100%' : '0'})`,
    config: config.gentle
  });

  if (!hireable) return null;
  return (
    <animated.div style={props}>
      <Wrapper>
        <span>
          I&apos;m currently looking for my next position!{' '}
          <a href="mailto:hi@zachbharris.com">Let&apos;s Chat</a>
        </span>
      </Wrapper>
    </animated.div>
  );
};

export default StatusBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${hensonGold};
  color: ${soulBlack};
  padding: 0.5rem 1rem;
  text-align: center;

  span {
    a {
      font-weight: 600;
      color: ${soulBlack};
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 0.875rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.75rem;
  }
`;
