import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { justWhite } from "../../theme/colors";

const ExternalLink = ({ align, href, content, ...rest }) => {
  if (align !== "right") return (
    <Link href={href} target="_blank" rel="noopener nofollower" {...rest}>{content}</Link>
  );
  
  return (
    <Wrapper>
      <Link href={href} target="_blank" rel="noopener nofollower" {...rest}>{content}</Link>
    </Wrapper>
  )
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  align: PropTypes.string
}

ExternalLink.defaultProps = {
  align: ""
}

const Wrapper = styled.div`
  display: block;
  text-align: right;
`;

const Link = styled.a`
  text-align: right;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  color: ${justWhite};
`;

export default ExternalLink;
