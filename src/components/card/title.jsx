import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  if (!title) return null;
  return <Text>{title}</Text>;
}

const Text = styled.h3`
  grid-area: title;
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default Title;
