import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => (
  <section className="header">
    <h1 className="header-title">{title}</h1>
    {subtitle ? <p className="header-subtitle">{subtitle}</p> : null}
  </section>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Header.defaultProps = {
  subtitle: null,
};
