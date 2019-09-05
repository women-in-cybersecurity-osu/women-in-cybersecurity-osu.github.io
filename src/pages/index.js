import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import "./index.css"

const Container = styled.div`
  background-color: rgb(25, 25, 25);
  height: 100vh;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box = styled.div`
  background: linear-gradient(to bottom right, #7800b2ff, #008e82ff);
  width: 55vw;
  height: 95vh;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-align: center;
  color: rgb(200, 200, 200);
`

const Header = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`

const IndexPage = () => (
  <Container>
    <Box>
      <Nav />
      <Header>WiCyS @ OSU</Header>
      <h3>
        Open to all genders and majors, Ohio State University's Women in
        CyberSecurity chapter is dedicated to empowering and supporting
        underrepresented groups in cybersecurity and computer science.
      </h3>
    </Box>
  </Container>
)

export default IndexPage
