import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const titles = ["💩", "Probably listening to Polyphia", "🎸"]
const keywords = [
  `developer`,
  `engineer`,
  `react`,
  `ui engineer`,
  `saint louis`,
  `st. louis`,
  `front end developer`,
  `javascript`,
]

const randomizeTitle = titles[Math.floor(Math.random() * titles.length)]

const IndexPage = () => (
  <Layout>
    <SEO title={randomizeTitle} keywords={keywords} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
