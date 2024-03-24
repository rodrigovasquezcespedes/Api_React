
import { Card, Button, Collapse } from 'react-bootstrap';
import React, { useState } from 'react';

interface Props {
    card: {
        id:number;
        thumbnail: {
            path: string;
            extension: string;
        };
        name: string;
        description:string;
    };
}
const CardComponent: React.FC<Props> = ({ card }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="row m-2 justify-content-center">
        <Card border="light" className='bg-dark pt-2 text-center' style={{ width: '15rem' }}>
          <Card.Img className="cardItem h-75 img-thumbnail" src={`${card.thumbnail.path}.${card.thumbnail.extension}`} />
          <Card.Body>
            <Card.Title className='text-center font-weight-bold text-danger'>{card.name}</Card.Title>
            <Button onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              variant="danger"
              size="sm">
              Ver Descripcion
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <ul className="list-group mt-2">
                  <li className="list-group-item">{card.description}</li>
                </ul>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      </div>
    );
};

export default CardComponent;