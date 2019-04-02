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
  border-top: 1px solid ${border};
  padding: 1.5rem;
  margin: 3rem auto 0;
  max-width: 902px;
  width: 100%;
  text-align: center;
  color: ${justWhite};
`;