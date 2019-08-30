import React from "react"
import styled from "styled-components"
import Nav from "../../components/Nav"
import { UpcomingEvents, PastEvents } from "./utils"
const Container = styled.div`
  background: linear-gradient(to bottom right, #7800b2ff, #008e82ff);
  height: 100vh;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  background-color: rgb(25, 25, 25);
  width: 55vw;
  height: 95vh;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-align: center;
  color: rgb(150, 150, 150);
`
const Header = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const Row = styled.div`
  flex-direction: row;
`

const IndexPage = () => (
  <Container>
    <Box>
      <Nav />
      <h2>Upcoming Events</h2>
      <Row>
        <UpcomingEvents />
      </Row>
      <h2>Past Events</h2>
      <PastEvents />
    </Box>
  </Container>
)

export default IndexPage
