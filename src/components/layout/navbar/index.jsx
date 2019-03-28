import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { soulBlack, hensonGold } from '../../../theme/colors'

const socials = [
  {
    icon: 'fab fa-spotify',
    name: 'spotify',
    href: 'https://open.spotify.com/user/12133482232?si=lGuZPIDWQiyWwd_vZjDAAA'
  },
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
    icon: 'fas fa-envelope',
    name: 'email',
    href: 'mailto:hi@zachbharris.com'
  }
]

const Navbar = () => (
  <Wrapper>
    <Nav>
      <nav>
        <Link to="/">Blog</Link>
      </nav>
      <div>
        {socials.map((social, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={social.href}
            title={social.name}
          >
            <i className={social.icon} />
          </a>
        ))}
      </div>
    </Nav>
  </Wrapper>
)

const Wrapper = styled.div`
  background-color: ${ soulBlack };
  border-bottom: 1px solid ${ hensonGold };
`

const Nav = styled.div``

export default Navbar
