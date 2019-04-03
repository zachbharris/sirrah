import React from "react";
import { useStore } from "easy-peasy";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import { border, justWhite } from "../../theme/colors";

const Footer = () => {
  const loading = useStore(state => state.loading);
  const props = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: loading ? 0 : 1
    }
  });
  const year = new Date().getFullYear();

  return (
    <animated.div style={props}>
      <Wrapper>
        <span>&copy; {year} Zach Harris All Rights Reserved</span>
      </Wrapper>
    </animated.div>
  )
}

export default Footer;

const Wrapper = styled.footer`
  display: block;
  border-top: 1px solid ${border};
  padding: 1.5rem 0;
  margin: 3rem auto 0;
  max-width: 902px;
  text-align: center;
  color: ${justWhite};

  @media screen and (max-width: 960px) {
    margin: 3rem 1rem 0;
  }
`;
