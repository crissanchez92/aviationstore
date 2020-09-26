import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface ItemCardProps{
    imageSrc: string;
    title: string;
    text: string;
}

export const ItemCard: React.FC<ItemCardProps> = (props) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imageSrc} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.text}
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}