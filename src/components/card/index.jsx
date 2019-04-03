import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

import Title from './title';
import Description from './description';
import Languages from './languages';
import Company from './company';
import { justWhite, soulBlack } from '../../theme/colors';

const trans = s => `scale(${s})`;

const Card = ({ title, description, languages, company, link }) => {
  const [props, set] = useSpring(() => ({
    s: 1,
    config: config.wobbly
  }));

  const { s } = props;

  return (
    <animated.a
      style={{
        transform: s.interpolate(trans),
        textDecoration: 'none',
        zIndex: 1
      }}
      onMouseEnter={() => set({ s: 1.025 })}
      onMouseLeave={() => set({ s: 1 })}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Wrapper>
        <Title title={title} />
        <Description description={description} />
        <Languages languages={languages} />
        <Company company={company} />
      </Wrapper>
    </animated.a>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  languages: PropTypes.string,
  company: PropTypes.string
};

Card.defaultProps = {
  description: '',
  languages: '',
  company: ''
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'title title'
    'description description'
    'languages company';
  grid-template-columns: 1fr auto;

  border: 1px solid #656565;
  border-radius: 3px;
  background-color: ${soulBlack};
  color: ${justWhite};
  padding: 1rem;
  text-decoration: none;
`;

const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

Card.Group = CardGroup;

export default Card;
