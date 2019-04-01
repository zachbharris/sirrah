import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const keywords = [
  `developer`,
  `engineer`,
  `react`,
  `saint louis`,
  `st. louis`,
  `front end developer`,
  `front end engineer`,
  `ui engineer`,
  `javascript`
]

const IndexPage = () => (
  <Layout>
    <SEO title="UI Engineer in St. Louis" keywords={keywords} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
