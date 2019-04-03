import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from './title';
import Description from './description';
import Languages from './languages';
import Company from './company';
import { justWhite } from '../../theme/colors';

const Card = ({ title, description, languages, company, link }) => {
  return (
    <Wrapper href={link} target="_blank" rel="noopener noreferrer">
      <Title title={title} />
      <Description description={description} />
      <Languages languages={languages} />
      <Company company={company} />
    </Wrapper>
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

const Wrapper = styled.a`
  display: grid;
  grid-template-areas:
    'title title'
    'description description'
    'languages company';
  grid-template-columns: 1fr auto;

  border: 1px solid #656565;
  border-radius: 3px;
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
