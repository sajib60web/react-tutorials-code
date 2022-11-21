import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function ReactBootstrap() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col sm="6">
            <Card className="p-1">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ReactBootstrap
