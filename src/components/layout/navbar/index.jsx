import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'

import { justWhite, soulBlack, hensonGold } from '../../../theme/colors'

const socials = [
  {
    icon: 'fab fa-twitter',
    name: 'twitter',
    href: 'https://twitter.com/zachbharris'
  },
  {
    icon: 'fab fa-github',
    name: 'github',
    href: 'https://github.com/zachbharris'
  },
  {
    icon: 'fab fa-spotify',
    name: 'spotify',
    href: 'https://open.spotify.com/user/12133482232?si=lGuZPIDWQiyWwd_vZjDAAA'
  },
  {
    icon: 'fas fa-envelope',
    name: 'email',
    href: 'mailto:hi@zachbharris.com'
  }
]

const CallMeImage = () => (
  <StaticQuery
    query={graphql`
      query {
        favicon: file(relativePath: { eq: "favicon.png" }) {
          childImageSharp {
            fluid(maxWidth: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.favicon.childImageSharp.fluid} />}
  />
)

const Navbar = () => (
  <Wrapper>
    <HomeLink to="/">
      <CallMeImage />
      <span>Zach Harris</span>
    </HomeLink>

    <Nav>
      {socials.map((social, index) => (
        <Social
          key={index}
          target={social.name !== 'email' ? '_blank' : null}
          rel={social.name !== 'email' ? 'noopener noreferrer' : null}
          href={social.href}
          title={social.name}
        >
          <i className={social.icon} />
        </Social>
      ))}
    </Nav>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${ soulBlack };
  border-bottom: 1px solid ${ hensonGold };
  font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
  padding: 0.5rem;
`

const hover = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-15deg);
  }

  50% {
    transform: rotate(15deg);
  }

  75% {
    transform: rotate(-7deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  .gatsby-image-wrapper {
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
  }
  span {
    color: ${ justWhite };
    font-weight: 500;
  }

  &:hover {
    text-decoration: none;

    .gatsby-image-wrapper {
      animation: ${ hover } 500ms cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
    }
  }
`

const Nav = styled.div`
  display: flex;
  align-items: center;

  nav {
    padding-right: 0.5rem;
    margin-right: 0.5rem;
    border-right: 1px solid ${ hensonGold };
    a {
      background-color: ${ hensonGold }00;
      border-radius: 5px;
      color: ${ justWhite };
      padding: 0.25rem 0.5rem;

      transition: background-color ease-in 100ms;

      &:hover {
        background-color: ${ hensonGold }50;
        text-decoration: none;
      }
    }
  }
`

const Social = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;

  color: ${ justWhite };
  background-color: ${ hensonGold }00;
  border-radius: 50%;
  font-size: 1rem;

  transition: background-color ease-in 100ms;

  &:hover {
    text-decoration: none;
    background-color: ${ hensonGold }50;
  }
`

export default Navbar
