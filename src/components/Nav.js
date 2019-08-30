import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  padding: 1rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: rgb(150, 150, 150);
`

const NavItem = styled.a`
  font-size: 1rem;
  padding: 0.5em;
  text-decoration: inherit;
  color: inherit;
  &:hover {
    color: #fff;
  }
`

const Nav = () => (
  <Container>
    <NavItem href="/">Home</NavItem>
    <NavItem href="/events">Events</NavItem>
    <NavItem>Jobs</NavItem>
    <NavItem>Enrichment</NavItem>
    <NavItem>About Us</NavItem>
  </Container>
)
export default Nav
