import React from "react";
import { Trail } from "react-spring";
import styled from "styled-components";

const Animation = ({ text }) => {
  text = text.split("");
  return (
    <Wrapper>
      <Trail
        items={text}
        keys={item => item}
        from={{ transform: "translate3d(0, -5rem, 0)", opacity: 0 }}
        to={{ transform: "translate3d(0, 0px, 0)", opacity: 1 }}
      >
        {item => props => <span style={props}>{item}</span>}
      </Trail>
    </Wrapper>
  );
};

export default Animation;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  span {
    font-size: 5rem;
    font-weight: 500;
  }
`;
