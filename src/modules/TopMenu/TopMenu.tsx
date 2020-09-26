import React, {  } from "react";
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

export const TopMenu: React.FC = () => {
    return(
        <Row className="TopMenu">
        <Col>
          <p>We Are Aviation</p>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Búsqueda"
              aria-label="Búsqueda"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Buscar</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    )
}