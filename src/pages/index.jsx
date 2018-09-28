import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import Terminal from '../components/Terminal';
import Header from '../components/Header';


const IndexPage = () => (
  <Layout className="home">
    <div className="background-skew" />
    <div className="container">
      <Header title="Zachary Harris" subtitle="Front-End Engineer" />
      <Terminal />
    </div>
  </Layout>
);

export default IndexPage;
