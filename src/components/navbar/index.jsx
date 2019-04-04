import React from 'react';
import { useStore } from 'easy-peasy';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';

import { justWhite, hensonGold, soulBlack } from '../../theme/colors';
import socialMedia from '../../data/socialMedia.json';
import Available from './Available';

const Navbar = () => {
  const loading = useStore(state => state.loading);
  const hireable = useStore(state => state.user.data.hireable);

  const props = useSpring({
    from: {
      opacity: 0
    },
    to: {
      transform: `translateY(${loading ? '-100%' : '0'})`,
      opacity: loading ? 0 : 1
    },
    config: config.gentle
  });

  return (
    <animated.div style={props}>
      <Wrapper hireable={hireable}>
        <HomeLink className="home" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/favicon.png`}
            alt="call me emoji"
          />
          <span>Zach Harris</span>
          <span>UI Engineer</span>
        </HomeLink>

        {hireable && (
          <Available
            text="I am currently looking for a new position!"
            link={{
              href: 'mailto:hi@zachbharris.com',
              text: 'Lets Chat!'
            }}
          />
        )}

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
            );
          })}
        </SocialMedia>
      </Wrapper>
    </animated.div>
  );
};

const wiggle = keyframes`
  0% {
    transform: rotate(0deg)
  }
  33% {
    transform: rotate(15deg)
  }
  66% {
    transform: rotate(-15deg)
  }
  100% {
    transform: rotate(0deg)
  }
`;

const HomeLink = styled(Link)`
  grid-area: home;
  display: flex;
  align-items: center;

  text-decoration: none;
  font-weight: normal;
  font-size: 1rem;
  color: ${justWhite};

  &:hover {
    img {
      animation: ${wiggle} ease 500ms forwards;
    }
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

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const SocialMedia = styled.div`
  grid-area: links;
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

    transition: background-color ease-in-out 100ms;

    &:hover {
      background-color: ${hensonGold}50;
    }
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const Wrapper = styled.nav`
  position: relative;
  display: grid;
  grid-template-areas: ${({ hireable }) => {
    if (hireable) return `'home available links'`;
    return `'home links'`;
  }};
  grid-gap: 1rem;

  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${hensonGold};
  background-color: ${soulBlack};
  margin-bottom: 1.5rem;
  z-index: 1;

  ${({ hireable }) => {
    if (hireable)
      return `
        @media screen and (max-width: 850px) {
          grid-template-areas:
            'available available'
            'home links';
        };
      `;
    return null;
  }}

  @media screen and (max-width: 500px) {
    grid-template-areas: ${({ hireable }) => {
      return hireable ? `"available" "home" "links"` : `"home" "links"`;
    }};
    justify-content: center;
  }
`;

export default Navbar;
