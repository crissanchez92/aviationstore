import React from 'react';
import { Accordion, Card, Button, ButtonGroup } from 'react-bootstrap';
import { ProductType } from '../../models/ProductType';

interface MenuProps{
    onCategoryChanged: (e: any) => void,
    productTypes: ProductType[]
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
                    <Button value='Todas'>Todas</Button>
                    {props.productTypes.map(productType => {
                      return(
                        <Button key={productType.name} value={productType.name}>{productType.name}</Button>
                      )
                    })}
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