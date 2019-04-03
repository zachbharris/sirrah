import React from "react";
import { useStore } from "easy-peasy";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import { justWhite, hensonGold } from "../../theme/colors";
import socialMedia from "../../data/socialMedia.json";

const Navbar = () => {
  const loading = useStore(state => state.loading);
  const props = useSpring({
    transform: `translateY(${ loading ? "-3rem" : "0" })`
  });

  return (
    <animated.div style={props}>
      <Wrapper>
        <HomeLink className="home" to="/">
          <img src={process.env.PUBLIC_URL + "/favicon.png"} alt="call me emoji" />
          <span>Zach Harris</span>
          <span>UI Engineer</span>
        </HomeLink>
        
        <SocialMedia>
          {socialMedia.map((social, index) => {
            return (
              <a
                key={index}
                href={social.href}
                title={social.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.icon} />
              </a>
            )
          })}
        </SocialMedia>
      </Wrapper>
    </animated.div>
  )
}

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  text-decoration: none;
  font-weight: normal;
  font-size: 1rem;
  color: ${justWhite};

  @media screen and (max-width: 640px) {
    margin-bottom: 0.5rem;
  }

  img {
    height: 1rem;
    width: 1rem;
  }

  span {
    margin-left: 0.5rem;
    &:first-of-type {
      font-weight: 600;
    }
    &:last-of-type {
      opacity: 0.5;
    }
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    font-size: 1rem;
    border-radius: 50%;
    background-color: transparent;
    text-decoration: none;
    color: ${justWhite};
    margin-left: 0.25rem;
  
    &:hover {
      background-color: ${hensonGold}50;
    }
  }
`;

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${hensonGold};
  margin-bottom: 1.5rem;

  @media screen and (max-width: 640px) {
   flex-direction: column;
  }
`;

export default Navbar;
