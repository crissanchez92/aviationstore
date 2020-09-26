import React from 'react';
import { Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';

interface MenuProps{
    onCategoryChanged: (e: any) => void
}

const Menu : React.FC<MenuProps> = (props) => {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Categorías
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ButtonGroup vertical onClick={props.onCategoryChanged}>
                    <Button value='1'>Gorras</Button>
                    <Button value='2'>LLaveros</Button>
                    <Button value='3'>Aviones</Button>
                    <Button value='4'>Lámparas</Button>
                    <Button value='5'>Lanyards</Button>
                    <Button value='6'>Camisas</Button>
                    <Button value='7'>Accesorios</Button>
                    <Button value='8'>Juguetes</Button>
                  </ButtonGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Contáctenos
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Contáctenos Body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Quienes Somos?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Quienes Somos Body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
}

export default Menu;