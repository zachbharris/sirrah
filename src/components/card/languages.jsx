import React from "react";
import styled from "styled-components";

import { javascript, php, css } from "../../theme/colors";

const Languages = ({ languages }) => {
  if (!languages) return null;
  return (
    <Wrapper>
      <Color lang={languages} />
      <span>{languages}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: languages;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
`;

const Color = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${({ lang }) => {
    if (lang.toLowerCase() === "javascript") return javascript;
    if (lang.toLowerCase() === "php") return php;
    if (lang.toLowerCase() === "css") return css;
    return "#eee";
  }};
  margin-right: 0.5rem;
`;

export default Languages;
