import React from "react";
import styled from "styled-components";

const Description = ({ description }) => {
  if (!description) return null;
  return <Text>{description}</Text>;
}

export default Description;

const Text = styled.p`
  grid-area: description;
  font-size: 12px;
  margin: 0 0 1rem;
`;
