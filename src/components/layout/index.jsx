/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import Navbar from './navbar'

import { justWhite, hensonGold, soulBlack } from '../../theme/colors'

const Layout = ({ children }) => (
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
        <GlobalStyle />
        <Navbar />
        <Wrapper>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${ soulBlack };
    color: ${ justWhite };
    font-family: 'IMB Plex Sans', sans-serif;
    margin: 0;
    height: 100%;
  }

  body {
    margin: 0;
  }

  a {
    color: ${ hensonGold };
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-family: 'Open Sans', 'IBM Plex Sans', sans-serif;
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem 1.5rem;
`
