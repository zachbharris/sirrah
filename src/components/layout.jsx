import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../sass/style.scss';

const Layout = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Zachary Harris is a Front End Engineer based out of St. Louis, Missouri. He primarily focuses on JavaScript development with a strong skillset working with ReactJS' },
            { name: 'keywords', content: 'Engineer, Front End, Front End Engineer, Web Developer, Web Development, Front End Web Development, React, React Developer, JavaScript Developer, JavaScript Engineer, Saint Louis Web Developer, Remote Web Developer, Remote Web Engineeer' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className={className}>
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: String,
};

export default Layout;
