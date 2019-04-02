import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Title from "./title"
import Description from "./description"
import Languages from "./languages"
import Company from "./company"

const Card = ({ title, description, languages, company }) => {
  return (
    <Wrapper>
      <Title title={title} />
      <Description description={description} />
      <Languages languages={languages} />
      <Company company={company} />
    </Wrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  languages: PropTypes.string,
  company: PropTypes.string
}

Card.defaultProps = {
  description: "",
  languages: "",
  company: ""
}

export default Card;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "title title"
    "description description"
    "languages company";
  grid-template columns: 1fr auto;

  border: 1px solid #656565;
  border-radius: 3px;
`;