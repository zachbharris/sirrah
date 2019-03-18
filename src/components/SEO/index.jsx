import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router-dom";

const SEO = ({ title, description, thumbnail, location }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* open graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:url" content={location.pathname} />

      {/* twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnail} />
      <meta name="twitter:card" content={thumbnail} />
    </Helmet>
  );
};

export default withRouter(SEO);
