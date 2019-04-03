import React from "react";
import styled from "styled-components";

import { border, justWhite } from "../../theme/colors";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <span>&copy; {year} Zach Harris All Rights Reserved</span>
    </Wrapper>
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