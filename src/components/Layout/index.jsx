import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SEO from "../SEO";

const Layout = ({ container, children, title, description, thumbnail }) => {
  const renderSEO = () => (
    <SEO title={title} description={description} thumbnail={thumbnail} />
  );

  if (container)
    return (
      <Container>
        {renderSEO()}
        {children}
      </Container>
    );
  return (
    <>
      {renderSEO()}
      {children}
    </>
  );
};

const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;

Layout.propTypes = {
  container: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string
};

Layout.defaultProps = {
  container: false,
  title: "Zach Harris",
  description: "Zach Harris, Front End Engineer in St. Louis",
  thumbnail: null
};

export default Layout;
