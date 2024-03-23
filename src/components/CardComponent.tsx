import Card from 'react-bootstrap/Card';

interface Props {
    card: {
        thumbnail: {
            path: string;
            extension: string;
        };
        name: string;
    };
}
const CardComponent: React.FC<Props> = ({ card }) => {
    return (
        <div className="row m-2 justify-content-center"  >
            <Card border="light" className='bg-dark pt-2' style={{ width: '15rem' }}>
                <Card.Img className="cardItem   img-thumbnail" src={`${card.thumbnail.path}.${card.thumbnail.extension}`} />
                <Card.Body>
                    <Card.Title className='text-center text-white'>{card.name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardComponent;