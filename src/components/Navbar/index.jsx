import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { Container } from '../Helpers';

const Navbar = () => (
  <Styles>
    <Container>
      <NavLink to="/" children="Zach" />
      <nav>
        <ul>
          <li><NavLink to="/work" children="work" /></li>
        </ul>
      </nav>
    </Container>
  </Styles>
)

const Styles = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  background: red;
`

export default Navbar